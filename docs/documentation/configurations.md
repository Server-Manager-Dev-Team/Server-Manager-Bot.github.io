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

:::caution Warning

To use any of these commands, you need to have **Manage Guild** permissions or be in one or more of the `admin_roles` config roles set by the server.

:::

## Administrator Roles

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <code>/config admin_roles [hidden]</code> | View the server's admin roles | False |
| <code>/config admin_role add &lt;role&gt</code> | Add a role to the admin roles | False |
| <code>/config admin_role remove &lt;role&gt</code> | Remove a role from the admin roles | False |

## Moderator Roles

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <code>/config moderator_roles [hidden]</code> | View the server's moderator roles | False |
| <code>/config moderator_role add &lt;role&gt</code> | Add a role to the moderator roles | False |
| <code>/config moderator_role remove &lt;role&gt</code> | Remove a role from the moderator roles | False |

## Suggestion Configurations

| Usage | Description | Premium |
| ----------- | ----------- | ----------- |
| <code>/config suggestions_channel &lt;#channel&gt; </code> | Set the servers suggestion channel | False |
| <code>/config discussion_threads &lt;value&gt; </code> | Set the whether a thread should be created on suggestion creation | False |

<br />