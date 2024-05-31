 ![Addon icon](icons/reply-all.svg) Reply All Button
====================================================

Are you tired of clicking Thunderbird's "Smart Reply" button and
accidentally only replying to the list? Do you participate in open source
mailing lists whose policy is to always reply to everyone rather than just
the list? Do you get irrationally angry that there is no way to disable
"Reply List" functionality?

This add-on is for you! It adds a new "Reply All" button which can replace
the "Smart Reply" button in the message action toolbar. It will *always*
reply all, and never reply list.

Optionally, you can have it always reply with plain text instead of
defaulting to HTML format.

## Notes

You will need to configure the message display tab to remove the Smart Reply
and move the Reply All button to your preferred location in the action list.

## Installation

### From Thunderbird's Add-Ons Platform

[Reply All Button on addons.thunderbird.net](https://addons.thunderbird.net/thunderbird/addon/reply-all-button).

### Manual Installation

Pack the add-on as an .xpi file and install it from the “gear” menu in
Thunderbird's add-on manager.

On UNIX-like systems, you can create the .xpi file by simply running:

    $ cd seams/
    $ make
