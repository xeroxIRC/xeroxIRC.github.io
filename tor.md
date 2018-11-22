---
title: Tor
layout: page
---

#### Connection information
 - **Address**: `xeroxirc2ftim2zn.onion`
 - **Ports**: Plaintext: *None* **\|** TLS: `6667` & `6697`


##### Details
SASL is required in order to connect. On connection, you will be cloaked with a `xIRC/tor-sasl/accountname`-formatted hostname which may not be overridden.

TLS is required to connect for added security. Although a client certificate and SASL EXTERNAL is _not_ required, it is recommended. Please be sure to disable certificate issuer verification in your client as we currently use a self-signed certificate on the Tor server. This is because our main CA (Let's Encrypt) doesn't support `.onion` domain names.

Please bring any other questions to `bigfoot` on IRC, as he runs the hidden service server. Thanks!


##### Notable channels
 - `#tor` is the general support, information, and chat channel about the tor server
 - `#tor-only` is a tor-only chat channel
