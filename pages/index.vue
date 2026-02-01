<template>
  <div class="font-serif text-gray-800">
    <!-- Fixed Navigation Dots -->
    <nav class="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      <button 
        v-for="(section, i) in sections" 
        :key="i"
        @click="scrollToSection(i)"
        class="w-3 h-3 rounded-full border-2 border-white/80 transition-all duration-300"
        :class="currentSection === i ? 'bg-white scale-125' : 'bg-transparent hover:bg-white/50'"
      />
    </nav>

    <!-- Section 1: Hero -->
    <section class="section bg-olive relative overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="/top.jpg" 
          alt="Hero" 
          class="w-full h-full object-cover opacity-40"
        >
      </div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white px-6">
          <p class="text-sm tracking-[0.3em] mb-6 opacity-80">WEDDING INVITATION</p>
          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl mb-8 tracking-wide">
            Koudai & Sae
          </h1>
          <div class="flex items-center justify-center gap-6 text-lg opacity-80">
            <span class="h-px w-16 bg-white/50"></span>
            <span class="tracking-widest">2026.08.09</span>
            <span class="h-px w-16 bg-white/50"></span>
          </div>
          <div class="mt-16 animate-bounce">
            <svg class="w-6 h-6 mx-auto opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Greeting -->
    <section class="section bg-cream">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <p class="text-sm tracking-[0.3em] text-olive mb-8">GREETING</p>
        <div class="space-y-6 text-base leading-loose text-gray-600">
          <p>謹啓</p>
          <p>
            皆様におかれましては<br class="md:hidden">
            益々ご清祥のこととお慶び申し上げます
          </p>
          <p>
            このたび 私たちは<br class="md:hidden">
            結婚パーティーを開催することとなりました
          </p>
          <p>
            つきましては 日頃お世話になっております<br class="md:hidden">
            皆様と一緒に喜びのひとときを<br class="md:hidden">
            過ごさせていただければ幸いに存じます
          </p>
          <p>
            ご多用中誠に恐縮ではございますが<br class="md:hidden">
            ぜひご出席賜りますよう<br class="md:hidden">
            お願い申し上げます
          </p>
          <p class="pt-4">謹白</p>
          <p class="font-display text-2xl text-olive pt-6">Koudai & Sae</p>
        </div>
      </div>
    </section>

    <!-- Section 3: Host Introduction -->
    <section class="section bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-sm tracking-[0.3em] text-olive mb-4">HOST</p>
          <p class="text-gray-500">Thank you for always supporting us</p>
        </div>
        
        <div class="grid md:grid-cols-2 gap-12 md:gap-16">
          <!-- Groom -->
          <div class="text-center">
            <div class="aspect-[3/4] max-w-xs mx-auto mb-8 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/groom.jpg" 
                alt="Groom" 
                class="w-full h-full object-cover"
              >
            </div>
            <p class="text-sm tracking-[0.2em] text-olive mb-2">GROOM</p>
            <h3 class="font-display text-3xl mb-4">Koudai</h3>
            <p class="text-gray-500 leading-relaxed">
              30代の本気見せます！
            </p>
          </div>
          
          <!-- Bride -->
          <div class="text-center">
            <div class="aspect-[3/4] max-w-xs mx-auto mb-8 overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/bride.jpg" 
                alt="Bride" 
                class="w-full h-full object-cover"
              >
            </div>
            <p class="text-sm tracking-[0.2em] text-olive mb-2">BRIDE</p>
            <h3 class="font-display text-3xl mb-4">Sae</h3>
            <p class="text-gray-500 leading-relaxed">
              たくさん飲んでたくさん食べて<br>
              たくさん笑いましょう！
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Countdown -->
    <section class="section bg-olive text-white relative overflow-hidden">
      <div class="absolute inset-0">
        <img 
          src="/countdown.jpg" 
          alt="Background" 
          class="w-full h-full object-cover opacity-30"
        >
      </div>
      <div class="relative z-10 text-center px-6">
        <p class="text-sm tracking-[0.3em] mb-4 opacity-80">COUNTDOWN</p>
        <p class="text-gray-200 mb-12">Look forward to the day...</p>
        
        <p class="text-xl mb-8 tracking-wider">to 2026.08.09</p>
        
        <div class="flex justify-center gap-4 md:gap-8">
          <div class="countdown-item">
            <span class="text-5xl md:text-7xl font-light">{{ countdown.days }}</span>
            <span class="text-xs tracking-[0.2em] mt-2 opacity-70">DAYS</span>
          </div>
          <div class="countdown-item">
            <span class="text-5xl md:text-7xl font-light">{{ countdown.hours }}</span>
            <span class="text-xs tracking-[0.2em] mt-2 opacity-70">HOURS</span>
          </div>
          <div class="countdown-item">
            <span class="text-5xl md:text-7xl font-light">{{ countdown.minutes }}</span>
            <span class="text-xs tracking-[0.2em] mt-2 opacity-70">MINUTES</span>
          </div>
          <div class="countdown-item">
            <span class="text-5xl md:text-7xl font-light">{{ countdown.seconds }}</span>
            <span class="text-xs tracking-[0.2em] mt-2 opacity-70">SECONDS</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5: Party Info -->
    <section class="section bg-cream">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-16">
          <p class="text-sm tracking-[0.3em] text-olive mb-4">INFORMATION</p>
          <p class="text-gray-500">Details of our special day</p>
        </div>
        
        <div class="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div class="text-center mb-12">
            <p class="text-sm tracking-[0.2em] text-olive mb-2">WEDDING PARTY</p>
            <h3 class="font-display text-2xl">ウェディングパーティー</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 text-center">
            <div class="space-y-4">
              <div class="text-4xl md:text-5xl font-display text-olive">2026.08.09</div>
              <div class="text-xl">Sun</div>
            </div>
            <div class="space-y-2 text-gray-600">
              <p>開場 / <span class="text-xl font-medium text-gray-800">15:00</span></p>
              <p>開宴 / <span class="text-xl font-medium text-gray-800">15:15</span></p>
              <p>閉宴 / <span class="text-xl font-medium text-gray-800">18:00</span></p>
            </div>
          </div>
          
          <div class="border-t border-gray-100 mt-10 pt-10">
            <div class="text-center mb-8">
              <p class="text-sm tracking-[0.2em] text-olive mb-2">FEE</p>
              <h3 class="font-display text-2xl">会費</h3>
            </div>
            
            <div class="text-center space-y-4 text-gray-600">
              <p class="text-3xl font-display text-olive">¥9,000</p>
              <p class="text-sm text-gray-500">※ 7/31までにお支払いをお願いいたします</p>
              <div class="text-sm space-y-2 mt-4">
                <p class="font-medium text-gray-700">お支払い方法</p>
                <p>PayPay</p>
                <div class="mt-4 p-4 bg-gray-50 rounded-lg max-w-xs mx-auto">
                  <p class="font-medium text-gray-700 mb-2">PayPay</p>
                  <a 
                    href="https://qr.paypay.ne.jp/p2p01_deuBcji3Qcg1l66f" 
                    target="_blank"
                    class="inline-block text-olive underline hover:no-underline"
                  >
                    こちらから送金
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-100 mt-10 pt-10">
            <div class="text-center mb-8">
              <p class="text-sm tracking-[0.2em] text-olive mb-2">DRESS CODE</p>
              <h3 class="font-display text-2xl">服装</h3>
            </div>
            
            <div class="text-center space-y-4 text-gray-600">
              <p>ドレスコードはありません</p>
              <p>みなさんのお好きな服装でお越しください</p>
            </div>
          </div>
          
          <div class="border-t border-gray-100 mt-10 pt-10">
            <div class="text-center mb-8">
              <p class="text-sm tracking-[0.2em] text-olive mb-2">VENUE ACCESS</p>
              <h3 class="font-display text-2xl">アクセス</h3>
            </div>
            
            <div class="text-center space-y-4 text-gray-600">
              <p class="text-lg font-medium text-gray-800">会場 / ブッチャー・リパブリック</p>
              <p>横浜赤レンガ倉庫 2号館 1F</p>
              <p>〒231-0001 神奈川県横浜市中区新港1-1</p>
              <a 
                href="https://www.butcher-republic.com/akarenga.html" 
                target="_blank"
                class="inline-block text-olive underline hover:no-underline"
              >
                https://www.butcher-republic.com/yokohama/
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 6: Access Map -->
    <section class="section bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <p class="text-sm tracking-[0.3em] text-olive mb-4">ACCESS</p>
          <p class="text-gray-500">How to get there</p>
        </div>
        
        <div class="aspect-video rounded-lg overflow-hidden shadow-lg mb-10">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3250.1234!2d139.6434!3d35.4530!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c152351a8ef%3A0x79f45f5e13b159d8!2z5qiq5rWc6LWk44Os44Oz44Ks5YCJ5bqr!5e0!3m2!1sja!2sjp!4v1700000000000"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="w-full h-full"
          ></iframe>
        </div>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-cream rounded-lg p-6">
            <h4 class="font-medium mb-4 flex items-center gap-2">
              <span class="text-2xl">🚃</span>
              電車でお越しの方
            </h4>
            <ul class="space-y-2 text-gray-600 text-sm">
              <li>みなとみらい線「馬車道駅」より徒歩6分</li>
              <li>みなとみらい線「日本大通り駅」より徒歩6分</li>
              <li>JR・市営地下鉄「桜木町駅」より徒歩15分</li>
            </ul>
          </div>
          <div class="bg-cream rounded-lg p-6">
            <h4 class="font-medium mb-4 flex items-center gap-2">
              <span class="text-2xl">🚗</span>
              お車でお越しの方
            </h4>
            <p class="text-gray-600 text-sm">
              赤レンガ倉庫の駐車場をご利用ください<br>
              （有料：最初の1時間500円、以降250円/30分）
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8: Message -->
    <section class="section bg-cream">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <p class="text-sm tracking-[0.3em] text-olive mb-4">MESSAGE</p>
        <p class="text-gray-500 mb-12">TO OUR ESTEEMED FRIENDS</p>
        
        <div class="space-y-6 text-base leading-loose text-gray-600">
          <p>
            いつもお世話になっている<br class="md:hidden">
            大切な皆様へ
          </p>
          <p>
            私たちの門出を祝う<br class="md:hidden">
            この特別な日に<br class="md:hidden">
            ぜひお越しいただけますと幸いです
          </p>
          <p>
            美味しいお肉とお酒を用意して<br class="md:hidden">
            皆様のお越しをお待ちしております
          </p>
        </div>
        
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p class="font-display text-3xl text-olive">Koudai & Sae</p>
          <p class="text-sm text-gray-400 mt-4">2026.02.08</p>
        </div>
      </div>
    </section>

    <!-- Section 9: RSVP Form -->
    <section class="section bg-white">
      <div class="max-w-2xl mx-auto px-6">
        <div class="text-center mb-12">
          <p class="text-sm tracking-[0.3em] text-olive mb-4">RSVP</p>
          <p class="text-gray-500">出欠のご連絡</p>
          <p class="text-gray-500 mt-4 text-sm">
            新郎新婦との思い出写真を持っている方がいれば、<br class="md:hidden">
            新郎新婦に送っていただけると助かります
          </p>
        </div>
        
        <form 
          name="rsvp" 
          method="POST" 
          data-netlify="true"
          netlify-honeypot="bot-field"
          @submit.prevent="handleSubmit"
          class="bg-cream rounded-lg p-8 md:p-12 shadow-lg"
        >
          <input type="hidden" name="form-name" value="rsvp" />
          <p class="hidden">
            <label>Don't fill this out: <input name="bot-field" /></label>
          </p>
          
          <div class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                お名前 <span class="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                id="name"
                name="name" 
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all"
                placeholder="山田 太郎"
              />
            </div>
            
            <!-- Attendance -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                ご出欠 <span class="text-red-500">*</span>
              </label>
              <div class="flex gap-6">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="attend" 
                    v-model="form.attendance"
                    required
                    class="w-5 h-5 text-olive focus:ring-olive"
                  />
                  <span>出席</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="absent" 
                    v-model="form.attendance"
                    class="w-5 h-5 text-olive focus:ring-olive"
                  />
                  <span>欠席</span>
                </label>
              </div>
            </div>
            
            <!-- Allergies -->
            <div v-if="form.attendance === 'attend'">
              <label for="allergies" class="block text-sm font-medium text-gray-700 mb-2">
                アレルギー・苦手な食べ物
              </label>
              <input 
                type="text" 
                id="allergies"
                name="allergies" 
                v-model="form.allergies"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all"
                placeholder="例：甲殻類、ナッツ類"
              />
            </div>
            
            <!-- Message -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                メッセージ
              </label>
              <textarea 
                id="message"
                name="message" 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive focus:border-transparent transition-all resize-none"
                placeholder="お祝いのメッセージやご質問など"
              ></textarea>
            </div>
            
            <!-- Submit -->
            <div class="pt-4">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-4 bg-olive text-white font-medium rounded-lg hover:bg-olive/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? '送信中...' : '送信する' }}
              </button>
            </div>
          </div>
        </form>
        
        <!-- Success Message -->
        <div v-if="isSubmitted" class="mt-8 p-6 bg-green-50 rounded-lg text-center">
          <p class="text-green-800 text-lg">✓ ご回答ありがとうございます！</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 bg-olive text-white/60 text-center text-sm">
      <p>Koudai & Sae Wedding Party</p>
      <p class="mt-1">2026.08.09</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const weddingDate = new Date('2026-08-09T16:00:00+09:00')

const countdown = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

// Form state
const form = ref({
  name: '',
  email: '',
  attendance: '',
  allergies: '',
  message: ''
})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    const formData = new FormData()
    formData.append('form-name', 'rsvp')
    formData.append('name', form.value.name)
    formData.append('email', form.value.email)
    formData.append('attendance', form.value.attendance)
    formData.append('allergies', form.value.allergies)
    formData.append('message', form.value.message)
    
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    
    isSubmitted.value = true
    form.value = { name: '', email: '', attendance: '', allergies: '', message: '' }
  } catch (error) {
    alert('送信に失敗しました。もう一度お試しください。')
  } finally {
    isSubmitting.value = false
  }
}

const sections = ['hero', 'greeting', 'host', 'countdown', 'info', 'access', 'gallery', 'message', 'rsvp']
const currentSection = ref(0)

const galleryPhotos = [
  'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80',
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
]

const updateCountdown = () => {
  const now = new Date()
  const diff = weddingDate.getTime() - now.getTime()
  
  if (diff > 0) {
    countdown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    countdown.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    countdown.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    countdown.value.seconds = Math.floor((diff % (1000 * 60)) / 1000)
  }
}

const scrollToSection = (index: number) => {
  const sectionElements = document.querySelectorAll('.section')
  sectionElements[index]?.scrollIntoView({ behavior: 'smooth' })
}

const handleScroll = () => {
  const sectionElements = document.querySelectorAll('.section')
  const scrollPos = window.scrollY + window.innerHeight / 2
  
  sectionElements.forEach((section, i) => {
    const el = section as HTMLElement
    if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
      currentSection.value = i
    }
  })
}

let interval: ReturnType<typeof setInterval>

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  clearInterval(interval)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.section {
  @apply min-h-screen flex items-center justify-center py-24;
}

.countdown-item {
  @apply flex flex-col items-center;
}

.font-display {
  font-family: 'Cormorant Garamond', 'Noto Serif JP', serif;
}

.bg-olive {
  background-color: #5C6B4E;
}

.text-olive {
  color: #5C6B4E;
}

.bg-cream {
  background-color: #FAF8F5;
}
</style>
