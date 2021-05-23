/**
 * @jest-environment jsdom
 */

import {pushToHistory} from '../scripts/router.js'

describe("router test", () => {
    it("settings page", () => {
        expect(pushToHistory("settings").state).toEqual({page: 'settings'});
    })
    it("entry page", () => {
        let entryNum = 3;
        expect(pushToHistory("entry", entryNum).state).toEqual({page: `entry${entryNum}`});
    })
    it("default page", () => {
        expect(pushToHistory("wryyyyyyyy").state).toEqual({});
    })
    it("stack length", () => {
        let prev_height = history.length;
        for (let i = 0; i < 5; i++) {
            pushToHistory("entry", i);
        }
        expect(history.length).toBe(prev_height + 5);
    })
})