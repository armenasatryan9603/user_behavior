import { chrome } from 'jest-chrome'
import { addPageUpdateListener, removePageUpdateListener } from "../../services/ChromeService";


window.chrome = chrome;

test('addPageUpdateListener', async () => {
    const listenerSpy = jest.fn();
    const sendResponseSpy = jest.fn();
  
    await addPageUpdateListener();

    expect(listenerSpy).not.toBeCalled();
    expect(chrome.runtime.onMessage.hasListeners()).toBe(false);
    expect(sendResponseSpy).not.toBeCalled();
});

test('removePageUpdateListener', async () => {
    const listenerSpy = jest.fn();
    const sendResponseSpy = jest.fn();
  
    await removePageUpdateListener();

    expect(listenerSpy).not.toBeCalled();
    expect(chrome.runtime.onMessage.hasListeners()).toBe(false);
    expect(sendResponseSpy).not.toBeCalled();
});
