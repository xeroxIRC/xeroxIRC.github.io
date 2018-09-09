---
title: Linking requirements
layout: page
---

*Written by luk3yx, [last updated 2018-09-09](https://github.com/xeroxIRC/xeroxIRC.github.io/commits/master/linking-requirements.md).*

 Any of these rules may be overridden by xerox123 on a per-server basis.

 If you don't agree to one of the rules, ask xerox123. They may make an exception and come to an agreement.

##### Rule changes, server disconnects, etc:

 - xeroxIRC staff reserve the right to change these rules at any time, with or without notice.
 - Modified rules will not affect existing servers by default.
 - xerox123 reserves the right to disconnect and/or deny access to any linked server with or without reason.
 - xeroxIRC and/or xeroxIRC staff will not be held responsible for any damage done to any of the linked servers.

##### Requirements of servers:

 - They must be able to (and have sufficient bandwidth to) handle least 25 clients.
 - They must be running an IRCd fully compatible with the latest stable version of InspIRCd.
 - The server must only use secured server-to-server connections.
 - The server must be capable of fallover connections, so when a server goes down the connections can be automatically rerouted.
 - The server must not be easily accessible to hackers/snoopers/eavesdroppers.
 - The server must show the MOTD provided by xerox123, updated from the link provided.
 - The server's /rules output (if it has one) should redirect users to /motd.
 - The server must not link to any channel services or other servers unless approved by xerox123.
 - The server must only U-Line or grant extended access to servers approved by xerox123.
 - The server must allow users to connect without any server passwords.
 - The server must not store or transmit conversations or private messages unless approved by xerox123.
 - All servers outside of xeroxIRC that the server links to will need to be approved by xerox123.
 - All IRCOps on the servers or any linked servers will need to be approved by xerox123.
 - If the server is connected to another network, that network's rules will need to be compatible with xeroxIRC's.

##### Requirements of owners, IRCOps and people who have access to the server:

 - They must already know xerox123, or have a good reputation amongst the majority of IRC users.
 - They must be trusted by most xeroxIRC staff.
 - They must be trustworthy and honest.
 - They must not give out configuration files, passwords, password hashes, and IP addresses to anyone unless under xerox123's command.
 - They must be able to update configuration files on a regular basis.
 - They must follow the xeroxIRC rules.
 - They must not misuse or abuse their powers.

##### Other requirements:

 - Links can only be made when xeroxIRC is accepting server links. This will be in the topic of #routing.
 - There must be sufficient demand from users/bots to make it worthwhile linking another server. Any users already on the server will count towards this demand.
 - The users of xeroxIRC will need to have trust in the IRCOps of the server.


##### Requirements to be put on the rotation domain:

 - The server must provide non-SSL connections on port 6667, and provide SSL connections with the provided certificate on port 6697.
 - The server must send a 301 to http://ca.xeroxirc.net/<path> for all HTTP requests coming from http://xeroxirc.net.
 - The server must be able to automatically update the xeroxIRC SSL certificate, either via HTTPS or via SSH.


##### Recommendations:
 - The server uses a port number near 7000 (+/- 10) for linkages to xeroxIRC servers.
