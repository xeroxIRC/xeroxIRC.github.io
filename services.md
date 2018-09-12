---
title: Services
layout: page
navbar-index: 5
ads: true
---

This page explains how to use IRC services. If you need any help, please join #help and ask.

Don't like typing long commands, or do you prefer a GUI? Try the [Services Web Interface]({{ site.swi_baseurl }}/swi)!

*Fields indicated by <> means you need to enter your own information relevant to you.*

#### NickServ

##### Registering a nick

In order to make the most out of our services you must register with NickServ. Registering allows you to receive certain privileges on channels on channels, have a cloaked hostmask and other benefits such as using MemoServ to send offline messages. This is done by:

~~~
/msg NickServ REGISTER <password> <email-address>
~~~

*This creates an account to which you can group other nicks to. The email MUST be verifiable and not disposable, as per our [ToS]({{ site.baseurl }}/tos).*

##### Verifying an email

Inorder to fully register your nick you must verify the email you used. Visit the email you provided and check for an email from us and follow the instructions in the email. **Be sure to check the spam folder too.** Issues? Ask in #help.

##### Identifying to a nick

Once you've registered your nick, you must identify to it in order to access your account. To identify enter:

~~~
/msg NickServ IDENTIFY <password>
~~~

*In order to use this command your nick must be listed on the account.*

##### Claiming a vHost

xeroxIRC offers virtual hosts. They are in the form `xIRC/user/<nick>`. To claim your host enter:

~~~
/msg HostServ TAKE xIRC/user/$account
~~~

*Whenever you identify to your account, your host is applied.*

You can also claim a host for your bot. Ask in #help for a cloak for your bot.

##### Grouping other nicks

Grouping a nick allows you to access the same status on other channels along with full access to your account. There are two commands in order to group:

~~~
/msg NickServ LOGIN <main nick> <password to main nick>
~~~

*This logs you into your account so you can make modifications.*

~~~
/msg NickServ GROUP
~~~

*This associates your secondary nickname to your account.*

You should now be able to access the entire account from both nicks. You can group up to 15 nicks.

#### ChanServ

##### How to register a channel

So you have a channel (you can create one with `/join #<channel-name>`), and you now want ChanServ to prevent others gaining ops in the channel?

All you need to do to register a channel is:

~~~
/msg ChanServ REGISTER #<name-of-channel>
~~~

And that's it! ChanServ should join and set owner mode (+q) on you.

##### Automatically giving someone ops

If you don't know already, opping someone (setting mode +o) means they can kick or ban users, change the topic, and modify channel modes.

Once you've registered a channel, you can give certain people ops. They will need to have a NickServ account for this to work properly.

You need to say this on the channel to give someone auto-ops:

~~~
!flags <user> +Oo
~~~

This gives the user the flags +O and +o. +O makes ChanServ op them when they join, and are identified to the nick, and +o allows them to op themselves and anyone else on the channel without having ops themselves.

If you want to see who has auto-ops, you can list the flags by saying this on the channel:

~~~
!flags +Oo
~~~

*You can also see who has other flags, just append other flags to the query (such as +b to see all users banned from the channel).*

It should display a list of users with flags +Oo to you.

To list all flags, you can remove specific flags from your query like so:

~~~
!flags
~~~

##### Removing auto-ops from someone

If you want to remove auto-ops (or other flags) from someone, you can say:

~~~
!flags <user> -Oo
~~~

If you would like to add or remove more flags from someone, you can do:

~~~
/msg ChanServ HELP FLAGS
~~~

*You should be given a more verbose list of flags and what they do.*

##### Adding and removing flags to a more general group of people

If you would like to auto-op network staff, you can do:

~~~
!flags $oper +Oo
~~~

*This is an EXTTARGET. EXTTARGETs allow you to set flags on a more general group of users. Another target,  `$registered` allows you to apply flags to all identified users.*

For example, if you want to auto-voice all users identified with NickServ, you can do:

~~~
!flags $registered +Vv
~~~

##### Making the topic persist

When you set a topic on your channel (with `/topic <topic>`), it is displayed to all users, new and existing. However, during server reboots, or when the channel is empty, the topic is lost. You may tell ChanServ to keep the topic by doing:

~~~
!set keeptopic on
~~~

Alternatively, you can prevent anyone but you (and people with the +t flag) changing the topic by doing:

~~~
!set topiclock on
~~~

After you do that, instead of `/topic`, you and people with access must change the topic by doing:

~~~
!topic <new-topic>
~~~

*You can easily append/prepend text to your topic using !topicappend or !topicprepend respectively*

##### Anti-flood measures

Chanserv comes with its own built in flood-protections. To enable it say:

~~~
!set antiflood <quiet/kickban>
~~~

*Quiet: mutes the user.*
*Kickban: bans the user from the channel.*

To turn off protection use:

~~~
!set antiflood off
~~~

#### BotServ

##### Assigning a bot to a channel

BotServ allows you to use a custom nick for ChanServ without losing any features.

You may list the custom bots available for use by doing:

~~~
/msg BotServ BOTLIST
~~~

Once you have decided on the bot you want to use, and you are the channel founder (owner) in ChanServ, you may do:

~~~
/msg BotServ ASSIGN <channel> <bot-nickname>
~~~

Do you want to go back to the original ChanServ nick? To reset the BotServ nick, you can do:

~~~
/msg BotServ UNASSIGN <channel>
~~~

##### Taunting other users with BotServ

You may make a BotServ bot say messages on channels owned by you.

~~~
/msg BotServ SAY <channel> <message>
~~~

Now the users are scared. But you need to slap them with /me. Easily fixed by doing:

~~~
/msg BotServ ACT <channel> <message>
~~~

For example, you may do:

~~~
/msg BotServ ACT <channel> slaps <victim> with a(n) <unpleasant-object>
~~~

##### Getting more help

Still confused? Join #help and ask us for advice. No-one around to help? Create a HelpServ ticket with:

~~~
/msg HelpServ HELP <what you would like help with>
~~~

*We'll get back to you ASAP.*
