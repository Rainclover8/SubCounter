# 🎥 YouTube Subscriber Count App

Bu proje, **YouTube kanalının abone sayısını gerçek zamanlı olarak görüntüleyen** basit bir Next.js uygulamasıdır.  
YouTube Data API kullanarak kanal istatistiklerini çeker ve ekranda gösterir.

## 🚀 Özellikler
- ✅ Güncel abone sayısını anlık olarak gösterir  
- ✅ API anahtarlarını `.env` dosyasında güvenli bir şekilde saklar  
- ✅ Yüklenme aşamasında "Loading..." yazısı görüntüler  
- ✅ Next.js ve React Hook’ları (`useState`, `useEffect`) kullanır  

## 🛠️ Kullanılan Teknolojiler
- [Next.js](https://nextjs.org/)  
- [React](https://react.dev/)  
- [YouTube Data API v3](https://developers.google.com/youtube/v3)  
- [TailwindCSS](https://tailwindcss.com/) (opsiyonel, stiller için)  

## 📦 Kurulum

Projeyi bilgisayarına klonla:

```bash
git clone https://github.com/kullaniciAdi/youtube-subscriber-count.git
cd youtube-subscriber-count


npm install
# veya
yarn install


NEXT_PUBLIC_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_CHANNEL_ID=YOUR_CHANNEL_ID


npm run dev
# veya
yarn dev
