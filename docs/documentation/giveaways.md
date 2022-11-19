---
title: Giveaways
description: Documentation regarding a giveaway system
sidebar_position: 1
---

import Button from '../../src/components/Button';
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

|     Usage               |  Description   | Premium |
| ----------------------- | ----------- | ----------- |
| <span className="mention">/giveaway start [...]</span> | Start a giveaway       |   False        |
| <span className="mention">/giveaway end <giveaway_id></span>   | End a giveaway via giveaway ID        |     False        |
| <span className="mention">/giveaway reroll <giveaway_id> &lt;winners&gt;</span>   | Reroll a giveaway        |     False        |
| <span className="mention">/giveaway delete <giveaway_id></span>   | Delete a giveaway from the database        |     False        |
| <span className="mention">/giveaway view [giveaway_id]<span> </span>[hidden]</span>   | View a giveaway or all giveaways        |     False        |

<br/>

<div className="box blurple shadow no-background">
<div className="title">
Giveaway Start Parameters
</div>
<table>
  <tr>
    <th>Parameter</th>
    <th>Description</th>
    <th>Example</th>
  </tr>
  <tr>
    <td><span className="timestamp">name</span></td>
    <td>The title/name/prize of the giveaway</td>
    <td><span className="timestamp">name: $5 Nitro Classic</span></td>
  </tr>
  <tr>
    <td><span className="timestamp">duration</span> (<a className="discord-link" href="/blog/time-arguments">help here</a>)</td>
    <td>The duration of the giveaway</td>
    <td><span className="timestamp">duration: 6h</span></td>
  </tr>
  <tr>
    <td><span className="timestamp">winners</span></td>
    <td>The amount of winners for the giveaway, default is 1</td>
    <td><span className="timestamp">winners: 2</span></td>
  </tr>
  <tr>
    <td><span className="timestamp">channel</span></td>
    <td>The channel to host the giveaway in, default: current channel</td>
    <td><span className="timestamp">channel:<span className="mention">#giveaways</span></span></td>
  </tr>
  <tr>
    <td><span className="timestamp">description</span></td>
    <td>The description of the embed, this can be a note regarding the giveaway</td>
    <td></td>
  </tr>
  <tr>
    <td><span className="timestamp">color</span></td>
    <td>The color of the embed side bar</td>
    <td><span className="timestamp">color: Red</span></td>
  </tr>
  <tr>
    <td><span className="timestamp">ping_role</span></td>
    <td>The role to ping when you start the giveaway</td>
    <td><span className="timestamp">ping_role:<span className="mention">@Giveaway Ping</span></span></td>
  </tr>
  <tr>
    <td><span className="timestamp">entry_type</span></td>
    <td>The entry type of the giveaway (button, reaction), default is button - <a className="discord-link" href="/blog/v1.0.1-beta">read more</a></td>
    <td><span className="timestamp">entry_type: Reaction</span></td>
  </tr>
</table>
</div>

## Example

```txt
/giveaway start title:$5 Nitro Classic description:$5 Nitro Classic giveaway duration:6h entry_type:Reaction
```

<DiscordComponent>
    <DiscordMessage author="Docs Bot" avatar="blue" bot>
        <DiscordEmbed
        embedTitle="$5 Nitro Classic"
        authorIcon="/img/logo.png"
        authorName="Server Manager Support"
        borderColor="#5865F2"
        footerIcon="/img/logo.png"
        >
        $5 Nitro Classic giveaway with no requirement to enter! Click the button below this message to enter. Good luck! 🎉            
            <DiscordEmbedFields slot="fields" inline="true">
                <DiscordEmbedField fieldTitle="Ends">
                <span className="timestamp">in 6 hours</span>
                </DiscordEmbedField>
                <DiscordEmbedField fieldTitle="Host">
                  <DiscordMention highlight={true}>{defaultOptions.profiles.nziie.author}</DiscordMention>
                </DiscordEmbedField>
            </DiscordEmbedFields>
            <span slot="footer">By reacting you agree to being direct messaged • 1 winner</span>
        </DiscordEmbed>
      <div slot="interactions">
        <DiscordInteraction profile="bob" command>
          giveaway start
        </DiscordInteraction>
      </div>
      <div slot="reactions">
        <DiscordReactions>
          <DiscordReaction image="https://imgur.com/Q1aamD2.png" active count="10"/>
        </DiscordReactions>
      </div>
    </DiscordMessage>
</DiscordComponent>

<br/>

