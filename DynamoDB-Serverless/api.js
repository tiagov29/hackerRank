const db = require("./db");
const {
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");

const getPost = async (event) => {
  const response = { statusCode: 200 };

  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall({ postId: event.pathParemeters.postId }),
    };
    const { Item } = await db.send(new GetItemCommand(params));
    console.log({ Item });
    response.body = JSON.stringify({
      message: "successfully rerieved post.",
      data: Item ? unmarshall(Item) : {},
      rawData: Item,
    });
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to get post.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }
  return response;
};

const createPost = async (event) => {
  const response = { statusCode: 200 };

  try {
    const body = JSON.parse(event.body);
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall(body || {}),
    };
    const createResult = await db.send(new PutItemCommand(params));
    response.body = JSON.stringify({
      message: "successfully created post.",
      createResult,
    });
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to create post.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }
  return response;
};

const updatePost = async (event) => {
  const response = { statusCode: 200 };

  try {
    const body = JSON.parse(event.body);
    const objKeys = Object.keys(body);
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall({ postId: event.pathParemeters.postId }),
      updateExpression: `SET ${object
        .map((key, index) => `#key${index} = :value${index}`)
        .join(", ")}`,
      ExpressionAttributeNames: objKeys.reduce(
        (acc, key, index) => ({
          ...acc,
          [`#key${index}`]: key,
        }),
        {}
      ),
      ExpressionAttributeValues: marshall(
        objKeys.reduce(
          (acc, key, index) => ({
            ...acc,
            [`:value${index}`]: body[key],
          }),
          {}
        )
      ),
    };
    const updateResult = await db.send(new UpdateItemCommand(params));
    response.body = JSON.stringify({
      message: "successfully updated post.",
      updateResult,
    });
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to update post.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }
  return response;
};

const deletePost = async (event) => {
  const response = { statusCode: 200 };

  try {
    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Key: marshall({ postId: event.pathParemeters.postId }),
    };
    const deleteResult = await db.send(new DeleteItemCommand(params));
    response.body = JSON.stringify({
      message: "successfully deleted post.",
      deleteResult,
    });
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to delete post.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }
  return response;
};

const getAllPost = async (event) => {
  const response = { statusCode: 200 };

  try {
    const { Items } = await db.send({
      new ScanCommand({TableName: process.env.DYNAMODB_TABLE_NAME}),

    response.body = JSON.stringify({
      message: "successfully obtained posts.",
      data: Items.map((item) => unmarshall(item)),
      Items,
    });
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "Failed to get all posts.",
      errorMsg: e.message,
      errorStack: e.stack,
    });
  }
  return response;
};


module.exports = {
    getPost,
    createPost,
    updatePost,
    getAllPost,
}

