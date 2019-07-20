---
title: Connecting
layout: page
navbar-index: 2
---

To connect to xeroxIRC, use **[xeroxirc.net](ircs://xeroxirc.net)**. Most of our servers are listening on ports 6667 and 6697 for SSL/TLS, with the exception of `tor.xeroxirc.net` where only SSL/TLS is available.

**All servers have verified SSL certificates.** We recommend you use SSL/TLS at all times unless you have a good reason not to. You can view instructions on
how to enable TLS/SSL [here](use-tls).

The servers can be directly connected to using the following addresses:

| Address            | IPv6? | Port | SSL/TLS Port(s) | Notes                                         |
|--------------------|-------|------|-----------------|-----------------------------------------------|
| `gb.xeroxirc.net`  | No    | 6667 | +6697           |                                               |
| `nz.xeroxirc.net`  | Yes   | 6667 | +6697           |                                               |
| `ca.xeroxirc.net`  | Yes   | 6667 | +6697           |                                               |
| `ga.xeroxirc.net`  | Yes   | 6667 | +6697           |                                               |
| `tor.xeroxirc.net` | Yes   | None | +6667, +6697    | *See [Tor Relay](/tor) for more information.* |

*Some servers may be hidden from the above list as they are only for server-to-server connections.*

**NOTE: Connecting directly to a server does not ensure SSL verification, as the certs are issued to `xeroxirc.net`.**

#### Server map

<iframe src="{{ site.server_map }}">
    <a href="{{ site.server_map }}">Your browser doesn't support iframes,
    click here to view the map.</a>
</iframe>
