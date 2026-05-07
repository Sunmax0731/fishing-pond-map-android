# 全国釣り堀マップAndroid

全国の釣り堀を現在地、店舗名、地域、料金、魚種、営業時間、設備、アクセス条件から探せるAndroidアプリ。地図と一覧を片手で切り替え、候補の保存、訪問メモ、ルート起動、圏外でも読めるお気に入りキャッシュを扱う。

| 項目 | 内容 |
| --- | --- |
| Rank | 83 |
| Domain | AndroidApp |
| Idea No. | 14 |
| Repository | fishing-pond-map-android |
| 主な公開先 | Google Play |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: QCDS / 手動レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/app-adapter.mjs`: Android map/search product core + mobile preview 向けの表示状態を作る。
- `src/cli.mjs`: CLI。
- `public/`: closed alpha preview 用の静的 UI。

## Validation

```powershell
npm test
npm start
```

`npm test` で代表シナリオ、QCDS、docs ZIP、静的UI smoke、文字化けを検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
