# DOPE TEST
繁體中文 / English 原創 DOPE 風格自我探索網站。20 題、四種風格比例、同分混合結果、溝通建議及手機版面。不是官方或經驗證心理量表。

## 開發
Node.js 22.13+。在 website 執行 npm ci、npm run dev；正式建置為 npm run build。

## Stripe US$3 咖啡贊助
1. 在你的 Stripe 正式帳戶建立「Buy me a coffee」一次性產品，價格 USD 3.00。
2. 建立 Payment Link，固定數量 1，關閉可調整數量、促銷碼及自動稅額，保持結帳總額 US$3。不要啟用訂閱。
3. 複製 website/.env.example 為 website/.env.local，填入 NEXT_PUBLIC_STRIPE_PAYMENT_LINK=https://buy.stripe.com/你的正式連結。
4. 在部署環境設定同名建置環境變數，重新建置部署。這是公開連結，不需要 Stripe secret key。
5. 開放前核對結帳商戶是你的帳戶、US$3、數量 1、非訂閱。沒有連結時按鈕停用，顯示尚未開放；測試連結會被拒絕。
Stripe 文件：https://docs.stripe.com/payment-links/create

## 計分與私隱
每題四個回答分別對應 D/O/P/E，每題加 1 分，顯示位置按題目輪換。20 題全部完成才顯示結果；百分比為次數除以 20。最高分並列時顯示全部並列風格。答案只在頁面記憶體，切換語言保留答案，重新整理即清除。沒有帳戶、分析追蹤或答案資料庫；Stripe 在使用者開啟付款頁後處理付款資料。
風格框架參考：https://dope.org.nz/ 。情境題與建議均為原創，未複製第三方量表。

## 驗證
正式建置及 TypeScript 檢查通過。已檢查 20 題雙語完整性、四種主導結果、四方同分、百分比及非法／測試付款連結。
已提供漸進增強的 complete_dope_quiz WebMCP 工具。當前環境未提供支援的 WebMCP 驗證上下文，未驗證該工具的瀏覽器註冊與呼叫；不支援時不影響一般測驗。未進行瀏覽器互動測試。

