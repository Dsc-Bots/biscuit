import type { Model } from "./Base.ts";
import { ChannelTypes, DiscordChannel, Session, Snowflake } from "../mod.ts";

export abstract class Channel implements Model {
    constructor(session: Session, data: DiscordChannel) {
        this.id = data.id;
        this.session = session;
        this.name = data.name;
        this.type = data.type;
    }
    id: Snowflake;
    session: Session;
    name?: string;
    type: ChannelTypes;

    toString(): string {
        return `<#${this.id}>`;
    }
}
