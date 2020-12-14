var searchIndex = JSON.parse('{\
"quiche":{"doc":"🥧 Savoury implementation of the QUIC transport protocol…","i":[[3,"Config","quiche","Stores configuration shared between multiple connections.",null,null],[3,"Connection","","A QUIC connection.",null,null],[3,"Stats","","Statistics about the connection.",null,null],[12,"recv","","The number of QUIC packets received on this connection.",0,null],[12,"sent","","The number of QUIC packets sent on this connection.",0,null],[12,"lost","","The number of QUIC packets that were lost.",0,null],[12,"rtt","","The estimated round-trip time of the connection.",0,null],[12,"cwnd","","The size of the connection\'s congestion window in bytes.",0,null],[12,"delivery_rate","","The estimated data delivery rate in bytes/s.",0,null],[3,"ConnectionId","","A QUIC connection ID.",null,null],[3,"Header","","A QUIC packet\'s header.",null,null],[12,"ty","","The type of the packet.",1,null],[12,"version","","The version of the packet.",1,null],[12,"dcid","","The destination connection ID of the packet.",1,null],[12,"scid","","The source connection ID of the packet.",1,null],[12,"token","","The address verification token of the packet. Only present…",1,null],[12,"versions","","The list of versions in the packet. Only present in…",1,null],[3,"StreamIter","","An iterator over QUIC streams.",null,null],[4,"Error","","A QUIC error.",null,null],[13,"Done","","There is no more work to do.",2,null],[13,"BufferTooShort","","The provided buffer is too short.",2,null],[13,"UnknownVersion","","The provided packet cannot be parsed because its version…",2,null],[13,"InvalidFrame","","The provided packet cannot be parsed because it contains…",2,null],[13,"InvalidPacket","","The provided packet cannot be parsed.",2,null],[13,"InvalidState","","The operation cannot be completed because the connection…",2,null],[13,"InvalidStreamState","","The operation cannot be completed because the stream is in…",2,null],[13,"InvalidTransportParam","","The peer\'s transport params cannot be parsed.",2,null],[13,"CryptoFail","","A cryptographic operation failed.",2,null],[13,"TlsFail","","The TLS handshake failed.",2,null],[13,"FlowControl","","The peer violated the local flow control limits.",2,null],[13,"StreamLimit","","The peer violated the local stream limits.",2,null],[13,"StreamStopped","","The specified stream was stopped by the peer.",2,null],[13,"FinalSize","","The received data exceeds the stream\'s final size.",2,null],[13,"CongestionControl","","Error in congestion control.",2,null],[4,"Shutdown","","The stream\'s side to shutdown.",null,null],[13,"Read","","Stop receiving stream data.",3,null],[13,"Write","","Stop sending stream data.",3,null],[4,"Type","","QUIC packet type.",null,null],[13,"Initial","","Initial packet.",4,null],[13,"Retry","","Retry packet.",4,null],[13,"Handshake","","Handshake packet.",4,null],[13,"ZeroRTT","","0-RTT packet.",4,null],[13,"VersionNegotiation","","Version negotiation packet.",4,null],[13,"Short","","1-RTT short header packet.",4,null],[4,"CongestionControlAlgorithm","","Available congestion control algorithms.",null,null],[13,"Reno","","Reno congestion control algorithm. `reno` in a string form.",5,null],[13,"CUBIC","","CUBIC congestion control algorithm (default). `cubic` in a…",5,null],[5,"accept","","Creates a new server-side connection.",null,[[["option",4],["config",3]],[["result",6],["pin",3]]]],[5,"connect","","Creates a new client-side connection.",null,[[["config",3],["option",4]],[["result",6],["pin",3]]]],[5,"negotiate_version","","Writes a version negotiation packet.",null,[[],["result",6]]],[5,"retry","","Writes a stateless retry packet.",null,[[],["result",6]]],[5,"version_is_supported","","Returns true if the given protocol version is supported.",null,[[]]],[0,"h3","","HTTP/3 wire protocol and QPACK implementation.",null,null],[3,"Config","quiche::h3","An HTTP/3 configuration.",null,null],[3,"Header","","An owned name-value pair representing a raw HTTP header.",null,null],[3,"HeaderRef","","A non-owned name-value pair representing a raw HTTP header.",null,null],[3,"Connection","","An HTTP/3 connection.",null,null],[4,"Error","","An HTTP/3 error.",null,null],[13,"Done","","There is no error or no work to do",6,null],[13,"BufferTooShort","","The provided buffer is too short.",6,null],[13,"InternalError","","Internal error in the HTTP/3 stack.",6,null],[13,"ExcessiveLoad","","Endpoint detected that the peer is exhibiting behavior…",6,null],[13,"IdError","","Stream ID or Push ID greater that current maximum was used…",6,null],[13,"StreamCreationError","","The endpoint detected that its peer created a stream that…",6,null],[13,"ClosedCriticalStream","","A required critical stream was closed.",6,null],[13,"MissingSettings","","No SETTINGS frame at beginning of control stream.",6,null],[13,"FrameUnexpected","","A frame was received which is not permitted in the current…",6,null],[13,"FrameError","","Frame violated layout or size rules.",6,null],[13,"QpackDecompressionFailed","","QPACK Header block decompression failure.",6,null],[13,"TransportError","","Error originated from the transport layer.",6,null],[13,"StreamBlocked","","The underlying QUIC stream (or connection) doesn\'t have…",6,null],[13,"SettingsError","","Error in the payload of a SETTINGS frame.",6,null],[13,"RequestRejected","","Server rejected request.",6,null],[13,"RequestCancelled","","Request or its response cancelled.",6,null],[13,"RequestIncomplete","","Client\'s request stream terminated without containing a…",6,null],[13,"MessageError","","An HTTP message was malformed and cannot be processed.",6,null],[13,"ConnectError","","The TCP connection established in response to a CONNECT…",6,null],[13,"VersionFallback","","The requested operation cannot be served over HTTP/3. Peer…",6,null],[4,"Event","","An HTTP/3 connection event.",null,null],[13,"Headers","","Request/response headers were received.",7,null],[12,"list","quiche::h3::Event","The list of received header fields. The application should…",8,null],[12,"has_body","","Whether data will follow the headers on the stream.",8,null],[13,"Data","quiche::h3","Data was received.",7,null],[13,"Finished","","Stream was closed,",7,null],[13,"Datagram","","DATAGRAM was received.",7,null],[13,"GoAway","","GOAWAY was received.",7,null],[6,"Result","","A specialized `Result` type for quiche HTTP/3 operations.",null,null],[17,"APPLICATION_PROTOCOL","","List of ALPN tokens of supported HTTP/3 versions.",null,null],[8,"NameValue","","A trait for types with associated string name and value.",null,null],[10,"name","","Returns the object\'s name.",9,[[]]],[10,"value","","Returns the object\'s value.",9,[[]]],[11,"new","","Creates a new configuration object with default settings.",10,[[],[["config",3],["result",6]]]],[11,"set_max_header_list_size","","Sets the `SETTINGS_MAX_HEADER_LIST_SIZE` setting.",10,[[]]],[11,"set_qpack_max_table_capacity","","Sets the `SETTINGS_QPACK_MAX_TABLE_CAPACITY` setting.",10,[[]]],[11,"set_qpack_blocked_streams","","Sets the `SETTINGS_QPACK_BLOCKED_STREAMS` setting.",10,[[]]],[11,"set_dgram_poll_threshold","","Sets the `poll()` repetition threshold for DATAGRAM events.",10,[[]]],[11,"set_stream_poll_threshold","","Sets the `poll()` repetition threshold for stream events.",10,[[]]],[11,"new","","Creates a new header.",11,[[]]],[11,"new","","Creates a new header.",12,[[]]],[11,"with_transport","","Creates a new HTTP/3 connection using the provided QUIC…",13,[[["config",3],["connection",3]],[["result",6],["connection",3]]]],[11,"send_request","","Sends an HTTP/3 request.",13,[[["connection",3]],["result",6]]],[11,"send_response","","Sends an HTTP/3 response on the specified stream with…",13,[[["connection",3]],["result",6]]],[11,"send_response_with_priority","","Sends an HTTP/3 response on the specified stream with…",13,[[["connection",3]],["result",6]]],[11,"send_body","","Sends an HTTP/3 body chunk on the given stream.",13,[[["connection",3]],["result",6]]],[11,"dgram_enabled_by_peer","","Returns whether the peer enabled HTTP/3 DATAGRAM frame…",13,[[["connection",3]]]],[11,"send_dgram","","Sends an HTTP/3 DATAGRAM with the specified flow ID.",13,[[["connection",3]],["result",6]]],[11,"recv_dgram","","Reads a DATAGRAM into the provided buffer.",13,[[["connection",3]],["result",6]]],[11,"dgram_max_writable_len","","Returns the maximum HTTP/3 DATAGRAM payload that can be…",13,[[["connection",3]],["option",4]]],[11,"recv_body","","Reads request or response body data into the provided…",13,[[["connection",3]],["result",6]]],[11,"poll","","Processes HTTP/3 data received from the peer.",13,[[["connection",3]],["result",6]]],[11,"send_goaway","","Sends a GOAWAY frame to initiate graceful connection…",13,[[["connection",3]],["result",6]]],[11,"from_vec","quiche","Creates a new connection ID from the given vector.",14,[[["vec",3]]]],[11,"from_ref","","Creates a new connection ID from the given slice.",14,[[]]],[11,"from_slice","","Parses a QUIC packet header from the given buffer.",1,[[],[["result",6],["header",3]]]],[6,"Result","","A specialized `Result` type for quiche operations.",null,null],[17,"PROTOCOL_VERSION","","The current QUIC wire version.",null,null],[17,"MAX_CONN_ID_LEN","","The maximum length of a connection ID.",null,null],[17,"MIN_CLIENT_INITIAL_LEN","","The minimum length of Initial packets sent by a client.",null,null],[11,"new","","Creates a config object with the given version.",15,[[],[["config",3],["result",6]]]],[11,"load_cert_chain_from_pem_file","","Configures the given certificate chain.",15,[[],["result",6]]],[11,"load_priv_key_from_pem_file","","Configures the given private key.",15,[[],["result",6]]],[11,"load_verify_locations_from_file","","Specifies a file where trusted CA certificates are stored…",15,[[],["result",6]]],[11,"load_verify_locations_from_directory","","Specifies a directory where trusted CA certificates are…",15,[[],["result",6]]],[11,"verify_peer","","Configures whether to verify the peer\'s certificate.",15,[[]]],[11,"grease","","Configures whether to send GREASE values.",15,[[]]],[11,"log_keys","","Enables logging of secrets.",15,[[]]],[11,"enable_early_data","","Enables sending or receiving early data.",15,[[]]],[11,"set_application_protos","","Configures the list of supported application protocols.",15,[[],["result",6]]],[11,"set_max_idle_timeout","","Sets the `max_idle_timeout` transport parameter.",15,[[]]],[11,"set_max_recv_udp_payload_size","","Sets the `max_udp_payload_size transport` parameter.",15,[[]]],[11,"set_max_send_udp_payload_size","","Sets the maximum outgoing UDP payload size.",15,[[]]],[11,"set_initial_max_data","","Sets the `initial_max_data` transport parameter.",15,[[]]],[11,"set_initial_max_stream_data_bidi_local","","Sets the `initial_max_stream_data_bidi_local` transport…",15,[[]]],[11,"set_initial_max_stream_data_bidi_remote","","Sets the `initial_max_stream_data_bidi_remote` transport…",15,[[]]],[11,"set_initial_max_stream_data_uni","","Sets the `initial_max_stream_data_uni` transport parameter.",15,[[]]],[11,"set_initial_max_streams_bidi","","Sets the `initial_max_streams_bidi` transport parameter.",15,[[]]],[11,"set_initial_max_streams_uni","","Sets the `initial_max_streams_uni` transport parameter.",15,[[]]],[11,"set_ack_delay_exponent","","Sets the `ack_delay_exponent` transport parameter.",15,[[]]],[11,"set_max_ack_delay","","Sets the `max_ack_delay` transport parameter.",15,[[]]],[11,"set_disable_active_migration","","Sets the `disable_active_migration` transport parameter.",15,[[]]],[11,"set_cc_algorithm_name","","Sets the congestion control algorithm used by string.",15,[[],["result",6]]],[11,"set_cc_algorithm","","Sets the congestion control algorithm used.",15,[[["congestioncontrolalgorithm",4]]]],[11,"enable_hystart","","Configures whether to enable HyStart++.",15,[[]]],[11,"enable_dgram","","Configures whether to enable receiving DATAGRAM frames.",15,[[]]],[11,"set_keylog","","Sets keylog output to the designated `Writer`.",16,[[["box",3],["write",8]]]],[11,"recv","","Processes QUIC packets received from the peer.",16,[[],["result",6]]],[11,"send","","Writes a single QUIC packet to be sent to the peer.",16,[[],["result",6]]],[11,"stream_recv","","Reads contiguous data from a stream into the provided slice.",16,[[],["result",6]]],[11,"stream_send","","Writes data to a stream.",16,[[],["result",6]]],[11,"stream_priority","","Sets the priority for a stream.",16,[[],["result",6]]],[11,"stream_shutdown","","Shuts down reading or writing from/to the specified stream.",16,[[["shutdown",4]],["result",6]]],[11,"stream_capacity","","Returns the stream\'s send capacity in bytes.",16,[[],["result",6]]],[11,"stream_finished","","Returns true if all the data has been read from the…",16,[[]]],[11,"stream_init_application_data","","Initializes the stream\'s application data.",16,[[],["result",6]]],[11,"stream_application_data","","Returns the stream\'s application data, if any was…",16,[[],[["any",8],["option",4]]]],[11,"readable","","Returns an iterator over streams that have outstanding…",16,[[],["streamiter",3]]],[11,"writable","","Returns an iterator over streams that can be written to.",16,[[],["streamiter",3]]],[11,"dgram_recv","","Reads the first received DATAGRAM.",16,[[],["result",6]]],[11,"dgram_recv_peek","","Reads the first received DATAGRAM without removing it from…",16,[[],["result",6]]],[11,"dgram_recv_front_len","","Returns the length of the first stored DATAGRAM.",16,[[],["option",4]]],[11,"dgram_send","","Sends data in a DATAGRAM frame.",16,[[],["result",6]]],[11,"dgram_purge_outgoing","","Purges queued outgoing DATAGRAMs matching the predicate.",16,[[["fn",8]]]],[11,"dgram_max_writable_len","","Returns the maximum DATAGRAM payload that can be sent.",16,[[],["option",4]]],[11,"timeout","","Returns the amount of time until the next timeout event.",16,[[],[["duration",3],["option",4]]]],[11,"on_timeout","","Processes a timeout event.",16,[[]]],[11,"close","","Closes the connection with the given error and reason.",16,[[],["result",6]]],[11,"trace_id","","Returns a string uniquely representing the connection.",16,[[]]],[11,"application_proto","","Returns the negotiated ALPN protocol.",16,[[]]],[11,"peer_cert","","Returns the peer\'s leaf certificate (if any) as a…",16,[[],[["option",4],["vec",3]]]],[11,"is_established","","Returns true if the connection handshake is complete.",16,[[]]],[11,"is_resumed","","Returns true if the connection is resumed.",16,[[]]],[11,"is_in_early_data","","Returns true if the connection has a pending handshake…",16,[[]]],[11,"is_readable","","Returns whether there is stream or DATAGRAM data available…",16,[[]]],[11,"is_draining","","Returns true if the connection is draining.",16,[[]]],[11,"is_closed","","Returns true if the connection is closed.",16,[[]]],[11,"stats","","Collects and returns statistics about the connection.",16,[[],["stats",3]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"into_iter","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","quiche::h3","",10,[[]]],[11,"into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"to_string","","",6,[[],["string",3]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"name","","",11,[[]]],[11,"value","","",11,[[]]],[11,"name","","",12,[[]]],[11,"value","","",12,[[]]],[11,"as_ref","quiche","",14,[[]]],[11,"from","quiche::h3","",6,[[["error",4]]]],[11,"from","quiche","",14,[[["vec",3]]]],[11,"len","","",17,[[]]],[11,"next","","",17,[[],["option",4]]],[11,"clone","","",2,[[],["error",4]]],[11,"clone","","",0,[[],["stats",3]]],[11,"clone","quiche::h3","",6,[[],["error",4]]],[11,"clone","","",11,[[],["header",3]]],[11,"clone","","",12,[[],["headerref",3]]],[11,"clone","","",7,[[],["event",4]]],[11,"clone","quiche","",4,[[],["type",4]]],[11,"clone","","",14,[[]]],[11,"clone","","",1,[[],["header",3]]],[11,"clone","","",5,[[],["congestioncontrolalgorithm",4]]],[11,"default","","",14,[[]]],[11,"default","","",17,[[],["streamiter",3]]],[11,"eq","","",2,[[["error",4]]]],[11,"ne","","",2,[[["error",4]]]],[11,"eq","quiche::h3","",6,[[["error",4]]]],[11,"ne","","",6,[[["error",4]]]],[11,"eq","","",11,[[["header",3]]]],[11,"ne","","",11,[[["header",3]]]],[11,"eq","","",12,[[["headerref",3]]]],[11,"ne","","",12,[[["headerref",3]]]],[11,"eq","","",7,[[["event",4]]]],[11,"ne","","",7,[[["event",4]]]],[11,"eq","quiche","",4,[[["type",4]]]],[11,"eq","","",14,[[]]],[11,"eq","","",1,[[["header",3]]]],[11,"ne","","",1,[[["header",3]]]],[11,"eq","","",5,[[["congestioncontrolalgorithm",4]]]],[11,"deref","","",14,[[]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","quiche::h3","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","quiche","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","quiche::h3","",6,[[["formatter",3]],["result",6]]],[11,"hash","quiche","",14,[[]]],[11,"from_str","","Converts a string to `CongestionControlAlgorithm`.",5,[[],["result",4]]],[11,"source","","",2,[[],[["option",4],["error",8]]]],[11,"source","quiche::h3","",6,[[],[["option",4],["error",8]]]]],"p":[[3,"Stats"],[3,"Header"],[4,"Error"],[4,"Shutdown"],[4,"Type"],[4,"CongestionControlAlgorithm"],[4,"Error"],[4,"Event"],[13,"Headers"],[8,"NameValue"],[3,"Config"],[3,"Header"],[3,"HeaderRef"],[3,"Connection"],[3,"ConnectionId"],[3,"Config"],[3,"Connection"],[3,"StreamIter"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);