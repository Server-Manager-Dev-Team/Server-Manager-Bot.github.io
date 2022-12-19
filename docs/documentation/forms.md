---
title: ✨ Forms ✨
description: Documentation regarding a giveaway system
sidebar_position: 1
---

import Button from '../../src/components/Button';
import Highlight from '@site/src/components/Highlight';
import {
  DiscordInteraction,
  DiscordMessage,
  DiscordMessages,
  DiscordEmbed,
  DiscordEmbedField,
  DiscordEmbedFields,
  DiscordMention,
  DiscordReactions,
  DiscordReaction,
} from "discord-message-components/packages/react";
import "discord-message-components/packages/react/dist/style.css";
import {
  DiscordButton,
  DiscordButtons,
} from "discord-message-components/packages/react";
import DiscordComponent, { defaultOptions } from "../../src/components/DiscordComponent";

<div className="box gold no-background shadow">
<div className="title">
<icon icon="fa-solid fa-wand-magic-sparkles" size="sm" style={{'color': '#d2af26'}}/> New 
</div>
<p>Officially released as of 12/20/2022; if you encounter any bugs, submit a <a href="https://forum.servermanagerbot.ml">help request on our forum</a>!</p>
</div>

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <span className="mention">/forms create &lt;name&gt; &lt;description&gt; &lt;response_channel&gt;</span>  | Create a form/application, response channel is where responses will send to       |   False        |
| <span className="mention">/forms edit &lt;name&gt;</span>  | Edit a form, there are many more options here compared to creating a form       |   False        |
| <span className="mention">/forms delete &lt;name&gt;</span>  | Delete a form, this CANNOT be undone       |   False        |
| <span className="mention">/form &lt;name&gt;</span>  | Submit/complete a form       |   False        |
| <span className="mention">/apply &lt;name&gt;</span>  | Submit/complete a form (alias for <span className="mention">/form</span>)     |   False        |