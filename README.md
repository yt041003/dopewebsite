# DOPE TEST
繁體中文 / English DOPE 風格自我探索網站。20 道原創題目、風格比例、混合結果、溝通建議、太空人進度動畫與分享功能。非官方或經驗證的心理量表。

## 開發與 Vercel
Node.js 22.13+。在 website 執行 npm ci、npm run dev。正式建置 npm run build，啟動 npm start。框架為 Next.js 16.3.3。
Vercel 連接此 GitHub repository，Root Directory 設為 website，Framework 設為 Next.js，Production Branch 為 main。

## 設定
將 website/.env.example 複製為 website/.env.local。正式值只放 Vercel Environment Variables，不可提交到 Git。
- SUPABASE_URL：獨立 DOPE 專案 URL。
- SUPABASE_PUBLISHABLE_KEY：公開 API key；仍由伺服器使用。
- COUNTER_SECRET：至少 32 字元隨機秘密，只存在 Vercel 伺服器與本機忽略檔；資料庫只保存其 SHA-256。
- NEXT_PUBLIC_SITE_URL：自訂正式域名；不設時自動採用 Vercel production domain。
- GOOGLE_SITE_VERIFICATION：Google Search Console HTML 驗證 token（選填）。
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK：正式一次性 US$3 Payment Link（尚未提供）。

## 共用計數
schema 在 website/database/counter.sql，專案 dope-test，ref iztzysfrujrozcpdhvim。dope_private schema 不對瀏覽器開放；資料表啟用 RLS 且不授予 anon/authenticated 表權限。
伺服器簽發 HttpOnly、SameSite=Strict 匿名 cookie。完成 20 題後，即時驗證答案但不儲存答案，只以 HMAC 雜湊匿名識別碼去重。資料庫交易使用 row lock、唯一索引及原子更新；重送不增加。同一瀏覽器一年內只計一次；清除 cookie 或更換裝置可再被計數，因此不是經驗證的獨立人數。展示數字包含 3,125 初始基數，介面明確註明。這不是完整防機器人系統。
dope_complete 為有 secret 驗證的 SECURITY DEFINER RPC，固定空 search_path；dope_get_count 只返回總數。Supabase linter 對刻意公開的 definer RPC 及 deny-all private RLS 發出提示，屬此設計預期；https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable 。
資料庫斷線時顯示不可同步，不模擬加數，也不影響結果。twynzo-staging 沒有 DOPE 表，未作刪除。

## SEO
/zh-hant 與 /en 為預先產生的 HTML，各自有 title、description、canonical、hreflang、Open Graph、Twitter card 及 WebApplication JSON-LD。/ 308 導向 /zh-hant。/robots.txt 允許抓取，/sitemap.xml 列出兩個語言版本。
在 Google Search Console 新增正式網址，完成擁有權驗證後提交 sitemap.xml，對兩個語言網址要求建立索引。不能保證 Google 收錄時間或排名。
文件：https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Stripe
建立 Buy me a coffee 一次性產品 USD 3.00、固定數量 1、無訂閱，停用可調整數量、促銷碼及自動稅額。填入正式 buy.stripe.com 連結後重新部署。開放前核對商戶為你的帳戶與總額 US$3。未設定時入口停用。
文件：https://docs.stripe.com/payment-links/create

## 驗證
Next.js production build 與 TypeScript 通過。已驗證雙語題目、四種主導風格、同分、計分與付款連結驗證。
瀏覽器已確認答题進度、語言切換保留答案、結果才出現鳥類介紹、四方同分與複製分享文字。WebMCP 成功呼叫已驗證；其無效輸入檢查被審核用量限制中止。
SQL 交易內驗證首次完成、重複去重、第二匿名訪客及錯誤 secret，全部 rollback，保留 3125 基數。

