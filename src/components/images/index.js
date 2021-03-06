// @flow
import {Asset} from "expo";

const cover = require("./bg2.jpeg");

export default class Images {

    static cover = cover;

    static downloadAsync(): Promise<*>[] {
        return [
            Asset.loadAsync(cover)
        ];
    }
}
