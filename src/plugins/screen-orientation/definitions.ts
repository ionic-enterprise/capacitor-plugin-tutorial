import type { PluginListenerHandle } from '@capacitor/core';

export interface OrientationLockOptions {
  /**
   * Note: Typescript v5.2+ users should import OrientationLockType from @capacitor/screen-orientation.
   */
  orientation: OrientationLockType;
}

export type OrientationLockType =
  | 'any'
  | 'natural'
  | 'landscape'
  | 'portrait'
  | 'portrait-primary'
  | 'portrait-secondary'
  | 'landscape-primary'
  | 'landscape-secondary';

export interface ScreenOrientationResult {
  type: OrientationType;
}

export interface ScreenOrientationPlugin {
  /**
   * Returns the screen's current orientation.
   */
  orientation(): Promise<ScreenOrientationResult>;

  /**
   * Locks the screen orientation.
   */
  lock(options: OrientationLockOptions): Promise<void>;

  /**
   * Unlocks the screen's orientation.
   */
  unlock(): Promise<void>;

  /**
   * Listens for screen orientation changes.
   */
  addListener(
    eventName: 'screenOrientationChange',
    listenerFunc: (orientation: ScreenOrientationResult) => void,
  ): Promise<PluginListenerHandle>;

  /**
   * Removes all listeners
   */
  removeAllListeners(): Promise<void>;
}
