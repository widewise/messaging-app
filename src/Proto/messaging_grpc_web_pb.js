/**
 * @fileoverview gRPC-Web generated client stub for v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.v1 = require('./messaging_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.MessagingClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.v1.MessagingPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.MessageResponse>}
 */
const methodDescriptor_Messaging_GetMessagesStreamed = new grpc.web.MethodDescriptor(
  '/v1.Messaging/GetMessagesStreamed',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.EmptyRequest,
  proto.v1.MessageResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.MessageResponse>}
 */
const methodInfo_Messaging_GetMessagesStreamed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.MessageResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.v1.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.MessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingClient.prototype.getMessagesStreamed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.Messaging/GetMessagesStreamed',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetMessagesStreamed);
};


/**
 * @param {!proto.v1.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.MessageResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingPromiseClient.prototype.getMessagesStreamed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.Messaging/GetMessagesStreamed',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetMessagesStreamed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.MessagesRequest,
 *   !proto.v1.MessagesResponse>}
 */
const methodDescriptor_Messaging_GetMessages = new grpc.web.MethodDescriptor(
  '/v1.Messaging/GetMessages',
  grpc.web.MethodType.UNARY,
  proto.v1.MessagesRequest,
  proto.v1.MessagesResponse,
  /**
   * @param {!proto.v1.MessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.MessagesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.MessagesRequest,
 *   !proto.v1.MessagesResponse>}
 */
const methodInfo_Messaging_GetMessages = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.MessagesResponse,
  /**
   * @param {!proto.v1.MessagesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.MessagesResponse.deserializeBinary
);


/**
 * @param {!proto.v1.MessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.MessagesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.MessagesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingClient.prototype.getMessages =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.Messaging/GetMessages',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetMessages,
      callback);
};


/**
 * @param {!proto.v1.MessagesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.MessagesResponse>}
 *     Promise that resolves to the response
 */
proto.v1.MessagingPromiseClient.prototype.getMessages =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.Messaging/GetMessages',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetMessages);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.MessageRequest,
 *   !proto.v1.MessageResponse>}
 */
const methodDescriptor_Messaging_SendMessage = new grpc.web.MethodDescriptor(
  '/v1.Messaging/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.v1.MessageRequest,
  proto.v1.MessageResponse,
  /**
   * @param {!proto.v1.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.MessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.MessageRequest,
 *   !proto.v1.MessageResponse>}
 */
const methodInfo_Messaging_SendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.MessageResponse,
  /**
   * @param {!proto.v1.MessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.MessageResponse.deserializeBinary
);


/**
 * @param {!proto.v1.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.MessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.MessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.Messaging/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Messaging_SendMessage,
      callback);
};


/**
 * @param {!proto.v1.MessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.MessageResponse>}
 *     Promise that resolves to the response
 */
proto.v1.MessagingPromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.Messaging/SendMessage',
      request,
      metadata || {},
      methodDescriptor_Messaging_SendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.UserResponse>}
 */
const methodDescriptor_Messaging_GetAddedUsersStreamed = new grpc.web.MethodDescriptor(
  '/v1.Messaging/GetAddedUsersStreamed',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.EmptyRequest,
  proto.v1.UserResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.UserResponse>}
 */
const methodInfo_Messaging_GetAddedUsersStreamed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.UserResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UserResponse.deserializeBinary
);


/**
 * @param {!proto.v1.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.UserResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingClient.prototype.getAddedUsersStreamed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.Messaging/GetAddedUsersStreamed',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetAddedUsersStreamed);
};


/**
 * @param {!proto.v1.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.UserResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingPromiseClient.prototype.getAddedUsersStreamed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.Messaging/GetAddedUsersStreamed',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetAddedUsersStreamed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.UserResponse>}
 */
const methodDescriptor_Messaging_GetRemovedUsersStreamed = new grpc.web.MethodDescriptor(
  '/v1.Messaging/GetRemovedUsersStreamed',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.v1.EmptyRequest,
  proto.v1.UserResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.UserResponse>}
 */
const methodInfo_Messaging_GetRemovedUsersStreamed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.UserResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UserResponse.deserializeBinary
);


/**
 * @param {!proto.v1.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.UserResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingClient.prototype.getRemovedUsersStreamed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.Messaging/GetRemovedUsersStreamed',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetRemovedUsersStreamed);
};


/**
 * @param {!proto.v1.EmptyRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.v1.UserResponse>}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingPromiseClient.prototype.getRemovedUsersStreamed =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/v1.Messaging/GetRemovedUsersStreamed',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetRemovedUsersStreamed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.UsersResponse>}
 */
const methodDescriptor_Messaging_GetUsers = new grpc.web.MethodDescriptor(
  '/v1.Messaging/GetUsers',
  grpc.web.MethodType.UNARY,
  proto.v1.EmptyRequest,
  proto.v1.UsersResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.v1.EmptyRequest,
 *   !proto.v1.UsersResponse>}
 */
const methodInfo_Messaging_GetUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.v1.UsersResponse,
  /**
   * @param {!proto.v1.EmptyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.v1.UsersResponse.deserializeBinary
);


/**
 * @param {!proto.v1.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.v1.UsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.v1.UsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.v1.MessagingClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/v1.Messaging/GetUsers',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetUsers,
      callback);
};


/**
 * @param {!proto.v1.EmptyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.v1.UsersResponse>}
 *     Promise that resolves to the response
 */
proto.v1.MessagingPromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/v1.Messaging/GetUsers',
      request,
      metadata || {},
      methodDescriptor_Messaging_GetUsers);
};


module.exports = proto.v1;

