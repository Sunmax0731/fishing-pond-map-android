export const productProfile = {
  "repository": "fishing-pond-map-android",
  "title": "全国釣り堀マップAndroid",
  "domain": "AndroidApp",
  "hostApp": null,
  "rank": 83,
  "tier": "P2",
  "ideaNo": 14,
  "overview": "全国の釣り堀を現在地、店舗名、地域、料金、魚種、営業時間、設備、アクセス条件から探せるAndroidアプリ。地図と一覧を片手で切り替え、候補の保存、訪問メモ、ルート起動、圏外でも読めるお気に入りキャッシュを扱う。",
  "problem": "外出先ではPC向けWeb検索より、現在地、移動手段、通信状況、片手操作に合わせて釣り堀を探したい。",
  "differentiation": "Web版の検索データをAndroidの現在地、ルート起動、オフラインお気に入り、訪問ログ、通知に接続する。",
  "publish": "Google Play",
  "surface": "Android map/search product core + mobile preview",
  "entity": "fishing pond candidate",
  "requiredFields": [
    "id",
    "title",
    "region",
    "fishTypes",
    "priceRange",
    "accessMethod"
  ],
  "warningField": "offlineCacheNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/listing-delivery-asset-checklist",
    "Sunmax0731/codex-remote-android",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber"
  ]
};
