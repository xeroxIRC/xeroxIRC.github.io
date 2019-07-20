---
title: Enabling TLS on WeeChat
layout: page
---

Enabling TLS/SSL on WeeChat is relatively simple.

Run the following commands, replacing `<servername>` with the name you have
given the IRC network. If you are unsure what name you have given the network,
you can run `/server` to view a list of servers (the output of this command
should appear in the `weechat` buffer).

```
/set irc.server.<servername>.addresses xeroxirc.net/6697
/set irc.server.<servername>.ssl on
/set irc.server.<servername>.ssl_verify on
/reconnect <servername>
```

*If you are trying to enable TLS/SSL on a network other than xeroxIRC, make
sure to replace `xeroxirc.net` in the above commands with the hostname of the
IRC network.*

The output of these `/set` commands should appear in the `weechat` buffer.

After reconnecting, you can verify that TLS is enabled by doing
`/whois <your nickname>` and making sure
`<your nickname> is using a secure connection` appears.
