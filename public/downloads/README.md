Build each app split by CPU architecture (smaller downloads than one
"fat" APK with every architecture bundled in):

  flutter build apk --release --split-per-abi

Output lands in build/app/outputs/flutter-apk/ as three files:
  app-arm64-v8a-release.apk    (recommended — covers ~all modern phones)
  app-armeabi-v7a-release.apk  (older/budget devices)
  app-x86_64-release.apk       (rare — mostly emulators)

Copy all three into the matching folder here, with those exact
filenames (matching the links in DownloadSection.tsx):

  public/downloads/car-owner/   <- from the digital_garage_car_owner build
  public/downloads/provider/    <- from the digital_garage_provider build

If you'd rather ship one single APK covering every architecture instead
(larger download, simpler to manage), run:

  flutter build apk --release

and copy that one file into each folder three times under all three
filenames above — or just tell me and I'll simplify DownloadSection.tsx
back down to one link per app instead of three.
