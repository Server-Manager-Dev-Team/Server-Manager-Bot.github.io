---
title: Moderation
description: Documentation regarding Moderation
---

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <span className="mention">/warn &lt;member&gt; [duration] [reason] [custom_reason] [moderator_hidden]</span>  | Warn a member (`moderator_hidden` hides the moderator from the actioned user)       |   False        |
| <span className="mention">/warnings [member]</span>         |     False        |
| <span className="mention">/remove_warning &lt;id&gt; [notify_user=True]</span>  | Remove a warning (`notify_user` will direct message the warned member that it was deleted)        |     False        |
| <span className="mention">/delete_all_warnings</span>  | Delete **ALL** warnings from your server. This is useful if your bot is acting slow when warning users        |     <premium>True</premium>        |
| <span className="mention">/ban &lt;member&gt; [reason] [custom_reason] [moderator_hidden] [delete_message_days]</span>   | Ban a member from the server (`delete_message_days` is the amount of message days to delete)       |     False        |
| <span className="mention">/unban &lt;user&gt; [reason] [custom_reason]</span> <span className="blurple-background">NEW</span>  | Unban a member from the server  |     False        |
| <span className="mention">/kick &lt;member&gt; [reason] [custom_reason] [moderator_hidden]</span>   | Kick a member from the server    |     False        |
| <span className="mention">/purge &lt;amount&gt;</span>   | Purge an amount of messages in the current channel    |     False        |
| <span className="mention">/mute &lt;member&gt; &lt;duration&gt; [reason] [custom_reason] [moderator_hidden]</span>   | Mute a member for a duration using **Discord's Timeout Feature**. (Example `duration` argument: '1h' = 1 hour)    |     False        |


<div className="box red">
🛑 Using the <span className="mention">/delete_all_warnings</span> command <strong>cannot be undone</strong>!
</div>

<div className="box yellow">
Discord's Timeout feature only allows members to be muted with a max duration of <strong>1 week</strong>. If you try and mute someone for over a week, the bot will send you an error message saying you can't do that
</div>

## Cases

| Command | Description | 
| ----------------------- | ----------- |
| <span className="mention">/case &lt;case_id&gt;</span> | View/manage a case - **you can edit a case in this command** |
| <span className="mention">/createcase &lt;member&gt; &lt;reason&gt; [action=Other] [proof=image url] [duration]</span> | Create a case for a user |
| <span className="mention">/case [member]</span> | View cases for the whole server or yourself |
