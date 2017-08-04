Debugging a node forked process
===============================

It does seem a bit hacky, but essentially we need to actually "pass on" the `inspect` flag, along with a new port.

Thanks to IonicaBizau for his `debug-mode` package, saved a lot of time figuring
this out from older but similar techniques.
