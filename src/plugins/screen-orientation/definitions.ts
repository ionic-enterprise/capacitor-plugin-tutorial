import type { PluginListenerHandle } from "@capacitor/core";

export interface ScreenOrientationPlugin {
  /**
   * Returns the screen's current orientation.
   */
  orientation(): Promise<{ type: OrientationType }>;

  /**
   * Locks the screen orientation.
   */
  lock(opts: { orientation: OrientationLockType }): Promise<void>;

  /**
   * Unlocks the screen's orientation.
   */
  unlock(): Promise<void>;

  /**
   * Listens for screen orientation changes.
   */
  addListener(
    eventName: "screenOrientationChange",
    listenerFunc: (orientation: { type: OrientationType }) => void
  ): Promise<PluginListenerHandle> & PluginListenerHandle;

  /**
   * Removes all listeners
   */
  removeAllListeners(): Promise<void>;
}
