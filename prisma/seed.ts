import { PrismaClient } from '@prisma/client'
import { calculateEmi } from '../src/lib/emi'

const prisma = new PrismaClient()

async function main() {
  const products = [
    {
      slug: 'iphone-17-pro',
      name: 'Apple iPhone 17 Pro',
      brand: 'Apple',
      promoImage: '/iphonebanner.jpg',
      category: 'smartphones',
      description: 'The ultimate iPhone with pro camera system and all-new design.',
      specs: {
        "Screen Size": "6.3 inch",
        "Processor": "A19 Pro Bionic",
        "Rear Camera": "48MP + 48MP + 48MP",
        "Battery": "4000 mAh",
        "OS": "iOS 19"
      },
      rating: 4.8,
      reviewCount: 2341,
      isNew: true,
      variants: [
        {
          storage: '256GB',
          color: 'Silver',
          colorHex: '#E4E4E4',
          mrp: 134900,
          price: 127400,
          imageUrl: '/iphone-silver-variant.jpg',
          gallery: ['/iphone-silver-variant.jpg'],
          isDefault: true,
        },
        {
          storage: '512GB',
          color: 'Silver',
          colorHex: '#E4E4E4',
          mrp: 154900,
          price: 147400,
          imageUrl: '/iphone-silver-variant.jpg',
          gallery: ['/iphone-silver-variant.jpg'],
          isDefault: false,
        },
        {
          storage: '256GB',
          color: 'Cosmic Orange',
          colorHex: '#B9724C',
          mrp: 134900,
          price: 127400,
          imageUrl: '/iphone-cosmic-orange-variant.png',
          gallery: ['/iphone-cosmic-orange-variant.png'],
          isDefault: false,
        },
        {
          storage: '512GB',
          color: 'Cosmic Orange',
          colorHex: '#B9724C',
          mrp: 154900,
          price: 147400,
          imageUrl: '/iphone-cosmic-orange-variant.png',
          gallery: ['/iphone-cosmic-orange-variant.png'],
          isDefault: false,
        }
      ]
    },
    {
      slug: 'galaxy-s24-ultra',
      name: 'Samsung Galaxy S24 Ultra',
      brand: 'Samsung',
      promoImage: '/sambanner.png',
      category: 'smartphones',
      description: 'Galaxy AI is here. Welcome to the era of mobile AI.',
      specs: {
        "Screen Size": "6.8 inch",
        "Processor": "Snapdragon 8 Gen 3",
        "Rear Camera": "200MP + 50MP + 12MP + 10MP",
        "Battery": "5000 mAh",
        "S-Pen": "Included"
      },
      rating: 4.7,
      reviewCount: 1890,
      isNew: false,
      variants: [
        {
          storage: '256GB',
          color: 'Titanium Red',
          colorHex: '#A02D2D',
          mrp: 129999,
          price: 119999,
          imageUrl: '/samsung-red-variant.png',
          gallery: ['/samsung-red-variant.png'],
          isDefault: true,
        },
        {
          storage: '512GB',
          color: 'Titanium Red',
          colorHex: '#A02D2D',
          mrp: 144999,
          price: 134999,
          imageUrl: '/samsung-red-variant.png',
          gallery: ['/samsung-red-variant.png'],
          isDefault: false,
        },
        {
          storage: '256GB',
          color: 'Titanium Gray',
          colorHex: '#6F7174',
          mrp: 129999,
          price: 119999,
          imageUrl: '/samsung-grey-variant.png',
          gallery: ['/samsung-grey-variant.png'],
          isDefault: false,
        },
        {
          storage: '512GB',
          color: 'Titanium Gray',
          colorHex: '#6F7174',
          mrp: 144999,
          price: 134999,
          imageUrl: '/samsung-grey-variant.png',
          gallery: ['/samsung-grey-variant.png'],
          isDefault: false,
        }
      ]
    },
    {
      slug: 'pixel-9-pro',
      name: 'Google Pixel 9 Pro',
      brand: 'Google',
      promoImage: '/pixelbanner.png',
      category: 'smartphones',
      description: 'The pro Google phone. Built with advanced AI.',
      specs: {
        "Screen Size": "6.7 inch",
        "Processor": "Google Tensor G4",
        "Rear Camera": "50MP + 48MP + 48MP",
        "Battery": "5050 mAh",
        "OS": "Android 15"
      },
      rating: 4.6,
      reviewCount: 954,
      isNew: false,
      variants: [
        {
          storage: '128GB',
          color: 'Sky Blue',
          colorHex: '#87CEEB',
          mrp: 109999,
          price: 99999,
          imageUrl: '/pixel-skyblue-variant.png',
          gallery: ['/pixel-skyblue-variant.png'],
          isDefault: true,
        },
        {
          storage: '256GB',
          color: 'Sky Blue',
          colorHex: '#87CEEB',
          mrp: 119999,
          price: 109999,
          imageUrl: '/pixel-skyblue-variant.png',
          gallery: ['/pixel-skyblue-variant.png'],
          isDefault: false,
        },
        {
          storage: '128GB',
          color: 'Porcelain',
          colorHex: '#F0EFEA',
          mrp: 109999,
          price: 99999,
          imageUrl: '/pixel-porcelain-variant.png',
          gallery: ['/pixel-porcelain-variant.png'],
          isDefault: false,
        },
        {
          storage: '256GB',
          color: 'Porcelain',
          colorHex: '#F0EFEA',
          mrp: 119999,
          price: 109999,
          imageUrl: '/pixel-porcelain-variant.png',
          gallery: ['/pixel-porcelain-variant.png'],
          isDefault: false,
        }
      ]
    },
    {
      slug: 'oneplus-15',
      name: 'OnePlus 15',
      brand: 'OnePlus',
      promoImage: '/oneplusbanner.png',
      category: 'smartphones',
      description: 'The ultimate camera flagship with Hasselblad tuning.',
      specs: {
        "Screen Size": "6.8 inch",
        "Processor": "Snapdragon 8 Gen 3",
        "Rear Camera": "50MP + 50MP + 50MP + 50MP",
        "Battery": "5000 mAh",
        "OS": "ColorOS"
      },
      rating: 4.5,
      reviewCount: 421,
      isNew: true,
      variants: [
        {
          storage: '256GB',
          color: 'Ocean Blue',
          colorHex: '#1D3B53',
          mrp: 89999,
          price: 79999,
          imageUrl: '/oneplus-blue-variant.png',
          gallery: ['/oneplus-blue-variant.png'],
          isDefault: true,
        },
        {
          storage: '512GB',
          color: 'Ocean Blue',
          colorHex: '#1D3B53',
          mrp: 99999,
          price: 89999,
          imageUrl: '/oneplus-blue-variant.png',
          gallery: ['/oneplus-blue-variant.png'],
          isDefault: false,
        },
        {
          storage: '256GB',
          color: 'Emerald Green',
          colorHex: '#2A5C43',
          mrp: 89999,
          price: 79999,
          imageUrl: '/oneplus-green-variant.png',
          gallery: ['/oneplus-green-variant.png'],
          isDefault: false,
        },
        {
          storage: '512GB',
          color: 'Emerald Green',
          colorHex: '#2A5C43',
          mrp: 99999,
          price: 89999,
          imageUrl: '/oneplus-green-variant.png',
          gallery: ['/oneplus-green-variant.png'],
          isDefault: false,
        }
      ]
    }
  ]

  const emiConfigurations = [
    { tenureMonths: 3, interestRate: 0 },
    { tenureMonths: 6, interestRate: 0 },
    { tenureMonths: 12, interestRate: 0 },
    { tenureMonths: 24, interestRate: 0 },
    { tenureMonths: 36, interestRate: 10.5 },
    { tenureMonths: 48, interestRate: 10.5 },
  ]

  const faqs = [
    {
      q: "Do I have to sell my mutual funds to buy a product?",
      a: "No! Your mutual funds act as collateral. They remain invested in the market and continue to earn compounding returns while you enjoy your new product."
    },
    {
      q: "Are there any interest or hidden charges?",
      a: "We offer 0% interest EMIs on most of our premium products. There are absolutely no hidden fees or surprise charges."
    },
    {
      q: "How fast is the approval process?",
      a: "Our process is 100% digital. By just entering your PAN and mobile number, your eligibility is checked and approved in less than 10 seconds."
    },
    {
      q: "Can I prepay or close my loan early?",
      a: "Yes, you can foreclose your loan at any time by simply paying the outstanding principal amount. We charge zero foreclosure fees."
    },
    {
      q: "Is my data and mutual fund investment secure?",
      a: "Absolutely. We partner with trusted institutions like CAMS and KFintech to securely manage the pledging process. Your data is encrypted and handled with bank-grade security."
    }
  ];

  const testimonials = [
    {
      name: "Rohit Mehra",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Overall, a really good experience with 1Fi. Easy process, clear communication and whenever I had a question, the support team actually helped."
    },
    {
      name: "Sneha Kulkarni",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "The app is simple to use. Everything from pledging funds to getting the loan was smooth. Got my iPhone on 0% EMI without touching my portfolio!"
    },
    {
      name: "Harshit Agarwal",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      text: "What I liked most is that I could keep my investments and still get liquidity. This was exactly what I was looking for. Brilliant concept."
    },
    {
      name: "Zain Khan",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      text: "I think it's one of the smartest ways to get a loan. You keep earning returns on your investments while paying 0% interest on the loan."
    },
    {
      name: "Aditi Sharma",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "I was a little confused in the beginning with this new concept of 0% EMI using mutual funds, but the overall experience with 1Fi was actually very straightforward."
    },
    {
      name: "Varun Mehta",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      text: "1Fi is completely anxiety free. I can see my loans, pledge mutual funds, track available limit and everything in one place. Best part is there are zero hidden charges."
    },
    {
      name: "Priya Desai",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "Bought a MacBook using 1Fi. The approval was instant and the mutual fund pledging was handled entirely through CAMS. Highly recommended!"
    },
    {
      name: "Karan Singh",
      avatar: "https://randomuser.me/api/portraits/men/82.jpg",
      text: "I used to sell my stocks and MFs whenever I needed cash. This changes everything. 0% EMI is just the cherry on top."
    }
  ];

  console.log('Start seeding...')

  // Clear existing variants to remove any stale colors/storages
  await prisma.variant.deleteMany({})

  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        promoImage: p.promoImage,
      },
      create: {
        slug: p.slug,
        name: p.name,
        brand: p.brand,
        promoImage: p.promoImage,
        category: p.category,
        description: p.description,
        specs: p.specs,
        rating: p.rating,
        reviewCount: p.reviewCount,
        isNew: p.isNew,
      },
    })
    
    // Cashback tiers based on product price point
    let cashback = 2000
    if (product.brand === 'Apple') cashback = 7500
    if (product.brand === 'Samsung') cashback = 5000
    if (product.brand === 'OnePlus') cashback = 3000

    for (const v of p.variants) {
      const variant = await prisma.variant.upsert({
        where: {
          productId_storage_color: {
            productId: product.id,
            storage: v.storage,
            color: v.color
          }
        },
        update: {
          mrp: v.mrp,
          price: v.price,
          imageUrl: v.imageUrl,
          gallery: v.gallery,
          isDefault: v.isDefault,
        },
        create: {
          productId: product.id,
          storage: v.storage,
          color: v.color,
          colorHex: v.colorHex,
          mrp: v.mrp,
          price: v.price,
          imageUrl: v.imageUrl,
          gallery: v.gallery,
          isDefault: v.isDefault,
        }
      })

      // Ensure no duplicates exist if running multiple times by deleting old EMI plans for this variant
      await prisma.emiPlan.deleteMany({
        where: { variantId: variant.id }
      })

      for (const config of emiConfigurations) {
        const monthlyAmount = calculateEmi(variant.mrp, config.tenureMonths, config.interestRate)
        const totalPayable = monthlyAmount * config.tenureMonths
        
        await prisma.emiPlan.create({
          data: {
            variantId: variant.id,
            tenureMonths: config.tenureMonths,
            interestRate: config.interestRate,
            monthlyAmount: monthlyAmount,
            cashback: cashback,
            isMutualFundBacked: true,
            totalPayable: totalPayable
          }
        })
      }
    }
  }

  // Clear existing FAQs and Testimonials
  await prisma.fAQ.deleteMany({})
  await prisma.testimonial.deleteMany({})

  // Seed FAQs
  for (const faq of faqs) {
    await prisma.fAQ.create({
      data: {
        question: faq.q,
        answer: faq.a
      }
    })
  }

  // Seed Testimonials
  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: {
        name: testimonial.name,
        avatar: testimonial.avatar,
        text: testimonial.text
      }
    })
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
