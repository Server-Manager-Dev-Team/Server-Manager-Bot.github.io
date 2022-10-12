---
title: Configurations
description: Documentation regarding the suggestion system
sidebar_position: 2
---

import Button from '../../src/components/Button';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";

<div className="box yellow">
⚠ To use any of these commands, you need to have <strong>Manage Guild</strong> permissions or be in one or more of the <code>admin_roles</code> config roles set by the server.
</div>

## Administrator Roles

<div className="box red">
🛑 Anyone with <strong>Manage Guild</strong> permissions or higher automatically by-pass this check.
</div>

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <span className="mention">/config admin_roles [hidden]</span> | View the server's admin roles | False |
| <span className="mention">/config admin_role add &lt;role&gt</span>| Add a role to the admin roles | False |
| <span className="mention">/config admin_role remove &lt;role&gt</span>| Remove a role from the admin roles | False |

## Moderator Roles

<div className="box">
Anyone in the <code>admin_roles</code> role(s) configuration automatically by-pass this check.
</div>

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <span className="mention">/config moderator_roles [hidden]</span> | View the server's moderator roles | False |
| <span className="mention">/config moderator_role add &lt;role&gt</span> | Add a role to the moderator roles | False |
| <span className="mention">/config moderator_role remove &lt;role&gt</span> | Remove a role from the moderator roles | False |

## Moderation Configurations

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <span className="mention">/config appeal_server_invite &lt;invite&gt</span> | Set the server's [appeal server invite](../updates/appeal-server-invite-notice.md) | <premium>True</premium> |

## Suggestion Configurations

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <span className="mention">/config suggestions_channel &lt;#channel&gt;</span> | Set the servers suggestion channel | False |
| <span className="mention">/config discussion_threads &lt;value&gt;</span> | Set the whether a thread should be created on suggestion creation | False |
| <span className="mention">/config suggestion_ping &lt;@role&gt;</span> | Set a role to be pinged when a suggestion is submitted - `None` by default | False |

## Custom Reasons

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <span className="mention">/config custom_reasons [hidden]</span> | View the server's custom reasons | False |
| <span className="mention">/config custom_reason add &lt;name&gt &lt;value&gt</span> | Add a custom reason - `name` will show up in slash command auto-complete for moderation commands and then will use `value` for the reason | False |

## Logging

<div className="box" style={{'padding-bottom':'0.25rem'}}>
<details className="customdetails">
  <summary>Preview</summary>

  <h3>Mutes</h3>

  ![Logging Preview 1](../assets/muteexample.png)
  <h3>Warnings</h3>

  ![Logging Preview 1](../assets/warningexample.png)
</details>
</div>
<br/>

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <span className="mention">/config log_channel &lt;#channel&gt</span> | Set the server's log channel | False |

<div className="box blue">
The log channel is only used for moderation logs at the moment
</div>