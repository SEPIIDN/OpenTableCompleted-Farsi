import { PRICE, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  await prisma.table.deleteMany();
  await prisma.review.deleteMany();
  await prisma.item.deleteMany()
  await prisma.restaurant.deleteMany()
  await prisma.location.deleteMany()
  await prisma.cuisine.deleteMany()
  await prisma.user.deleteMany();

  await prisma.location.createMany({
    data: [{ name: "تهران" }, { name: "مشهد" }, { name: "مازندران" }]
  })

  await prisma.cuisine.createMany({
    data: [{ name: "فست فود" }, { name: "سنتی" }, { name: "شمالی" }]
  })

  const locations = await prisma.location.findMany()
  const cuisines = await prisma.cuisine.findMany()

  const indianCuisineId =
    cuisines.find(cuisine => cuisine.name === "فست فود")?.id || 1
  const mexicanCuisineId =
    cuisines.find(cuisine => cuisine.name === "شمالی")?.id || 1
  const italianCuisineId =
    cuisines.find(cuisine => cuisine.name === "سنتی")?.id || 1

  const ottawaLocationId =
    locations.find(location => location.name === "تهران")?.id || 1
  const torontoLocationId =
    locations.find(location => location.name === "مشهد")?.id || 1
  const niagaraLocationId =
    locations.find(location => location.name === "مازندران")?.id || 1

  await prisma.restaurant.createMany({
    data: [
      // INDIAN //
      {
        name: "ایژین لانژ",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        price: PRICE.REGULAR,
        description:
          "رستوران ایژین لانژ یک رستوران فرانسوی لوکس و زیبا است که با محیطی رمانتیک و شیک، شما را به یک تجربه‌ی بی‌نظیر دعوت می‌کند. این رستوران انواع غذاهای فرانسوی مانند کرواسان، کرپ، کوئیش، راتاتوی، بوف بورگینیون و … را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. رستوران ایژین لانژ در خیابان زعفرانیه، نرسیده به میدان مقدس اردبیلی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg"
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "ایژین-لانژ-تهران",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "زودیاک لانژ",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47417441.jpg",
        price: PRICE.CHEAP,
        description:
          "رستوران زودیاک لانژ یک رستوران فرنگی لوکس و مدرن است که در هروی سنتر، طبقه دوم واقع شده است. این رستوران انواع غذاهای فرنگی مانند استیک، پیتزا، پاستا، ساندویچ، برگر، سالاد، املت و نیمرو را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417455.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417456.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417457.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417458.jpg"
        ],
        open_time: "12:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "زودیاک-لانژ-تهران",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "باماریا",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48545745.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "رستوران باماریا یک رستوران فرنگی لوکس و خوشمزه است که در اندیشه فاز ۴، چهارراه ارغوان، خیابان توحید شمالی، مجتمع خودنگاه، طبقه سوم واقع شده است. این رستوران انواع غذاهای فرنگی مانند استیک، پیتزا، پاستا، ساندویچ، برگر، سالاد، املت و نیمرو را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند. برای اطلاع از منوی کامل و قیمت‌ها، می‌توانید به وب‌سایت رستوران مراجعه کنید یا با شماره‌ی ۰۹۰۱۰۰۰۰۲۰۶ تماس بگیرید.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045353.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48545766.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045356.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49399187.jpg"
        ],
        open_time: "17:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "باماریا-تهران",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "شکم الملوک",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/26429498.jpg",
        price: PRICE.REGULAR,
        description:
          " دکوراسیونی اصیل و موسیقی‌ای آرام، شما را به یک گذر از گذشته دعوت می‌کند. این رستوران انواع غذاهای سنتی مانند دیزی، کله پاچه، آبگوشت، قورمه سبزی، قیمه و … را با گوشت‌های تازه و مرغابی آماده می‌کند. رستوران شکم الملوک در خیابان انقلاب، روبروی دانشگاه تهران واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29477326.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29777084.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104059.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104066.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "شکم-الملوک-تهران",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "ماکسیم",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/47914200.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "رستوران ماکسیم یک رستوران فرنگی لوکس و معروف است که در تقاطع جردن و میرداماد، زیر پل میرداماد واقع شده است. این رستوران انواع غذاهای فرنگی مانند استیک، پیتزا، پاستا، ساندویچ، برگر و سالاد را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند. برای اطلاع از منوی کامل و قیمت‌ها، می‌توانید به وب‌سایت رستوران مراجعه کنید.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914186.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980632.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980634.jpg"
        ],
        open_time: "16:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "ماکسیم-تهران",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "ونوشک",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49294128.jpg",
        price: PRICE.REGULAR,
        description:
          "رستوران ونوشک یک رستوران کردی اصیل و محبوب است که در مجموعه بام لند و در اطراف دریاچه چیتگر قرار گرفته است. این رستوران انواع غذاهای کردی مانند قیمه کورگ، کباب اسمعلی، خورشت خلال، دنده کباب و … را با گوشت‌های تازه و خوشمزه آماده می‌کند. محیط رستوران سنتی و موردی است و موسیقی زنده کردی و فارسی نیز در آن پخش می‌شود.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765139.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765149.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765157.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765162.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "ونوشک-تهران",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "دلبار",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646761.jpg",
        price: PRICE.CHEAP,
        description:
          "اگر به دنبال یک رستوران خوشمزه و گرم با غذاهای ایرانی هستید، رستوران دلبار را از دست ندهید. این رستوران با کیفیت بالا و قیمت مناسب، انواع کباب‌های ترش، کوبیده، برگ، چنجه و جوجه را با سالاد شیرازی، ماست و نوشابه سرو می‌کند. همچنین می‌توانید از برنج، نان تازه و دوغ خوشمزه‌ی این رستوران لذت ببرید. رستوران دلبار در محله‌ی شهرک غرب واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646761.jpg"
        ],
        open_time: "14:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "دلبار-تهران",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "بیف لاین",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/25733300.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "رستوران بیف لاین یک رستوران فرنگی لذیذ و مدرن است که در دو شعبه در تهران واقع شده است. این رستوران انواع برگر، استیک، ساندویچ و سالاد را با گوشت‌های تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733294.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733295.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733296.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733297.jpg"
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "بیف-لاین-تهران",
        location_id: niagaraLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "چشم تهران",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25602522.jpg",
        price: PRICE.CHEAP,
        description:
          "رستوران چشم تهران یک رستوران لوکس و خوشمزه است که در نیاوران، روبروی جماران واقع شده است. این رستوران انواع غذاهای ایتالیایی، ژاپنی و کره‌ای مانند پیتزا، سوشی، کیمچی، کاربونارا و … را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند. برای اطلاع از منوی کامل و قیمت‌ها، می‌توانید به وب‌سایت رستوران مراجعه کنید .",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854188.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25684161.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26009011.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "چشم-تهران",
        location_id: niagaraLocationId,
        cuisine_id: indianCuisineId
      },
      // MEXICAN //
      {
        name: "رومیصا",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/42557297.jpg",
        price: PRICE.REGULAR,
        description:
          "رستوران رومیصا یک رستوران لوکس و خوشمزه است که در بلوار ارتش، لاین کندرو، روبروی شمیران سنتر واقع شده است. این رستوران انواع غذاهای ایرانی، عربی و فرنگی مانند استیک، پیتزا، پاستا، برگر، سالاد، کیک و شیرینی، پلو و خورشت، سوپ، ماهی، میگو و غذای دریایی را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند. برای اطلاع از منوی کامل و قیمت‌ها، می‌توانید به وب‌سایت رستوران مراجعه کنید یا با شماره‌ی ۰۲۱۷۴۰۵۲۳۹۴ تماس بگیرید.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501707.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501713.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29501715.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42557295.jpg"
        ],
        open_time: "16:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "رومیصا-تهران",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "میخوش",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/48981502.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "رستوران میخوش یک رستوران مدرن و خوشمزه است که با محیطی شیک و راحت، شما را به یک تجربه‌ی لذت‌بخش از غذاهای ایتالیایی و فرنگی دعوت می‌کند. این رستوران انواع پیتزا، پاستا، برگر، سالاد، سوپ، سوخاری، استیک و … را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. رستوران میخوش در چند شعبه در تهران واقع شده و هر روز از ساعت ۱۰ تا ۲۴ پذیرای شما عزیزان است.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981480.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981483.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981485.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981487.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981490.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981492.jpg"
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "میخوش-تهران",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "گاردینو پلاس",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/28028883.png",
        price: PRICE.CHEAP,
        description:
          "رستوران گاردینو پلاس یک رستوران ایتالیایی خوشمزه و مجلل است که در خیابان پیروزی، بین خیابان سوم و دوم نیروهوایی واقع شده است. این رستوران انواع غذاهای ایتالیایی مانند پیتزا، پاستا، لازانیا، کاربونارا و … را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770621.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770622.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770624.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770625.jpg"
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "گاردینو-پلاس-تهران",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "طهران باربیکیو",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/32449465.jpg",
        price: PRICE.CHEAP,
        description:
          "رستوران طهران باربیکیو یک رستوران کبابی محبوب و معروف است که در خیابان شریعتی، بالاتر از پل رومی واقع شده است. این رستوران انواع کباب‌های دل و جیگر، ماهی، ترش و … را با گوشت‌های تازه و خوشمزه سرو می‌کند. محیط رستوران شیک و مدرن است و پرسنل آن مهربان و با حوصله هستند.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490939.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490987.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32507838.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/41724689.jpg"
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "طهران-باربیکیو-تهران",
        location_id: torontoLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "ناربن",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47744844.jpg",
        price: PRICE.EXPENSIVE,
        description:
          " مدیترانه‌ای، منویی متنوع و خوشمزه را به شما ارائه می‌دهد. این رستوران انواع سالاد‌ها، پاستاها، پیتزاها، ساندویچ‌ها، گوشت‌ها و غذاهای دریایی را با مواد تازه و ارگانیک آماده می‌کند. رستوران ناربن در خیابان میرداماد، نبش خیابان شهید محمدی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745080.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745081.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745093.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745144.jpg"
        ],
        open_time: "15:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "ناربن-تهران",
        location_id: torontoLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "ناربن",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47429858.jpg",
        price: PRICE.CHEAP,
        description:
          " مدیترانه‌ای، منویی متنوع و خوشمزه را به شما ارائه می‌دهد. این رستوران انواع سالاد‌ها، پاستاها، پیتزاها، ساندویچ‌ها، گوشت‌ها و غذاهای دریایی را با مواد تازه و ارگانیک آماده می‌کند. رستوران ناربن در خیابان میرداماد، نبش خیابان شهید محمدی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47600418.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429797.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429802.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429814.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "ناربن-مشهد",
        location_id: niagaraLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "شاندیز",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47710768.jpg",
        price: PRICE.CHEAP,
        description:
          "رستوران شاندیز یک رستوران تهرانی معروف و محبوب است که با محیطی سنتی ، شما را به یک چشم‌انداز از غذاهای خوشمزه د دعوت می‌کند. این رستوران انواع غذاها مانند شیشلیک، کباب ترش، کباب کوبیده، جوجه کباب، شله زرد و … را با گوشت‌های تازه و خوشمزه آماده می‌کند. رستوران شاندیز در خیابان میرداماد، نبش خیابان شهید مطهری واقع شده.",
        images: [],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "شاندیز-تهران",
        location_id: niagaraLocationId,
        cuisine_id: mexicanCuisineId
      },
      // ITALIAN //
      {
        name: "باغ ایرانی",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/43463549.jpg",
        price: PRICE.REGULAR,
        description:
          "رستوران باغ ایرانی یک رستوران ایرانی زیبا و دلنشین است که با محیطی سرسبز و آرام، شما را به یک لحظه‌ی خاطره‌انگیز از طعم‌های ایرانی دعوت می‌کند. این رستوران انواع غذاهای ایرانی مانند کباب، آش، خورشت، دمپخت، زرشک پلو و … را با مواد تازه و با کیفیت آماده می‌کند. رستوران باغ ایرانی در خیابان پاسداران، نبش خیابان گل نبی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463554.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463745.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463748.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463750.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463751.jpg"
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "باغ-ایرانی-تهران",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "ستاره قصران",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47350167.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "رستوران ستاره قصران یک رستوران ایتالیایی لذیذ و مجلل است که با محیطی زیبا و مدرن، شما را به یک تجربه‌ی خاص از غذاهای ایتالیایی دعوت می‌کند. این رستوران انواع غذاهای ایتالیایی مانند لازانیا، ریزوتو، کاربونارا، اسپاگتی، تیرامیسو و … را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. رستوران ستاره قصران در خیابان ولنجک، نبش خیابان شهید محمودی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305566.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305567.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305568.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305569.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305570.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30091570.jpg"
        ],
        open_time: "15:00:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "ستاره-قصران-تهران",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "مهر و ماه",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/50557365.jpg",
        price: PRICE.REGULAR,
        description:
          "رستوران مهر و ماه یک رستوران ایرانی-فرانسوی بی‌نظیر و خاص است که با محیطی زیبا و شیک، شما را به یک ترکیب جذاب از دو فرهنگ مختلف دعوت می‌کند. این رستوران انواع غذاهای ایرانی-فرانسوی مانند فسنجان با گوشت اردک، قورمه سبزی با گوشت گوسفند، کوئیش با سبزیجات، کرپ با خمیر قطره و … را با مواد اولیه‌ی تازه و با کیفیت آماده می‌کند. رستوران مهر و ماه در خیابان مطهری، نبش خیابان سرافراز واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/26374971.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374974.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374975.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374976.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50557389.jpg"
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "مهر-و-ماه-تهران",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "بیستون",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/46827195.jpg",
        price: PRICE.REGULAR,
        description:
          "رستوران بیستون یک رستوران کردی اصیل و محبوب است که با محیطی سنتی و بومی، شما را به یک چشم‌انداز از فرهنگ و هنر کردستان دعوت می‌کند. این رستوران انواع غذاهای کردی مانند کله پاچه، کوفته برنجی، دلمه، کباب کوبیده، کله کوفت و … را با گوشت‌های تازه و سبزیجات خوشمزه آماده می‌کند. رستوران بیستون در خیابان شهید بهشتی، نبش خیابان سهروردی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309468.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309469.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309470.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309472.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309474.png"
        ],
        open_time: "12:00:00.000Z",
        close_time: "18:00:00.000Z",
        slug: "بیستون-مازندران",
        location_id: niagaraLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "دوزلی",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49169798.jpg",
        price: PRICE.CHEAP,
        description:
          "ویژگی که کبابخانه دوزلی رو شلوغ و معروف کرده قیمت مناسب نسبت به کیفیت و طعم خوبشه. منو دوزلی خیلی متنوعه و شامل انواع کباب، انواع جوجه کباب با مرینیت های مختلف، زرشک پلو و ماهیه. متاسفانه این کبابخانه ارسال درب منزل ندارد و شما صرفا میتونید برای صرفه جویی در وقتتان تلفنی سفارش بدید، سپس خودتون تشریف ببرید و تحویل بگیرید.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253937.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253940.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253941.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415599.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415604.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49696221.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49999039.jpg"
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "دوزلی-مازندران",
        location_id: niagaraLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "امیر انفجار",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25558850.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "رستوران امیر انفجار یک رستوران اسپایسی و متفاوت است که با محیطی جوان‌پسند و پر از انرژی، شما را به یک چالش غذایی دعوت می‌کند. این رستوران انواع غذاهای اسپایسی مانند کاری، تاکو، بریتو، ناچو، وینگ‌های مرغ، برگر و … را با ادویه‌های تند و مخصوص آماده می‌کند. رستوران امیر انفجار در خیابان ونک، نبش خیابان ملاصدرا واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/25629442.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25636273.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25679656.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25825772.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26011606.jpg"
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "امیر-انفجار-تهران",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "خلیج فارس",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49463645.png",
        price: PRICE.REGULAR,
        description:
          "رستوران خلیج فارس یک رستوران خلیجی مجلل و بزرگ است که با محیطی شاد و پر از رنگ، شما را به یک چشم‌انداز از فرهنگ و آداب خلیجی دعوت می‌کند. این رستوران انواع غذاهای خلیجی مانند قرمه، ماهی قلیه، ماهی سبزی، ماهی تنوری، کباب ماهی، خورشت بامیه و … را با ماهی‌های تازه و لذیذ آماده می‌کند. رستوران خلیج فارس در خیابان شریعتی، بالاتر از میدان قدس واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741813.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741816.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741821.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741826.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741827.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "خلیج-فارس-مشهد",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "گیلانه گاردن",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49616181.jpg",
        price: PRICE.CHEAP,
        description:
          "رستوران گیلانه گاردن یکی از بهترین رستوران‌های تخصصی گیلانی در تهران است که با محیطی سبز و آرام، شما را به یک سفر خاطره‌انگیز به شمال کشور دعوت می‌کند. این رستوران انواع غذاهای گیلانی مانند میرزا قاسمی، بادمجان ترش، ترش تره، سیر ترش، ترش کباب، ماهی تابه‌ای و … را با مواد تازه و با کیفیت درست می‌کند. رستوران گیلانه گاردن در خیابان ولیعصر، بالاتر از پارک ساعی واقع شده.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494556.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494562.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494563.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49494887.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49533502.jpg"
        ],
        open_time: "07:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "گیلانه-گاردن-تهران",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId
      }
    ]
  })

  const restaurants = await prisma.restaurant.findMany()

  const vivaanId =
    restaurants.find(restaurant => restaurant.name === "ایژین لانژ")
      ?.id || 1
  const RamaKrishnaId =
    restaurants.find(restaurant => restaurant.name === "زودیاک لانژ")
      ?.id || 1
  const coconutLagoonId =
    restaurants.find(restaurant => restaurant.name === "باماریا")?.id ||
    1
  const lastTrainToDelhiId =
    restaurants.find(restaurant => restaurant.name === "شکم الملوک")
      ?.id || 1
  const adrakYorkvilleId =
    restaurants.find(restaurant => restaurant.name === "ماکسیم")?.id ||
    1
  const curryishTavernId =
    restaurants.find(restaurant => restaurant.name === "ونوشک")?.id ||
    1
  const utsavId =
    restaurants.find(restaurant => restaurant.name === "دلبار")?.id || 1
  const pukkaId =
    restaurants.find(restaurant => restaurant.name === "بیف لاین")?.id || 1
  const kamasutraIndianId =
    restaurants.find(restaurant => restaurant.name === "چشم تهران")
      ?.id || 1
  const eldoradoTacoId =
    restaurants.find(restaurant => restaurant.name === "رومیصا")?.id || 1
  const laBartolaId =
    restaurants.find(restaurant => restaurant.name === "میخوش")?.id || 1
  const elCatrinId =
    restaurants.find(restaurant => restaurant.name === "گاردینو پلاس")?.id || 1
  const mariachisId =
    restaurants.find(restaurant => restaurant.name === "طهران باربیکیو")?.id || 1
  const canoRestaurantId =
    restaurants.find(restaurant => restaurant.name === "باغ ایرانی")?.id ||
    1
  const bluRistoranteId =
    restaurants.find(restaurant => restaurant.name === "ستاره قصران")?.id ||
    1
  const stelvioId =
    restaurants.find(restaurant => restaurant.name === "مهر و ماه")?.id || 1
  const sofiaId =
    restaurants.find(restaurant => restaurant.name === "امیر انفجار")?.id || 1
  /*
    await prisma.item.createMany({
      data: [
        {
          name: "Ghee roast chicken wings",
          description:
            "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
          price: "$18.00",
          restaurant_id: vivaanId
        },
        {
          name: "Sol Kadhi scallop ceviche",
          description: "Cured scallop served with mangosteen and coconut broth",
          price: "$18.00",
          restaurant_id: vivaanId
        },
        {
          name: "Butte ka kees",
          description:
            "Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers",
          price: "$17.00",
          restaurant_id: vivaanId
        },
        {
          name: "Burrata Paapdi Chaat",
          description:
            "Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys",
          price: "$16.00",
          restaurant_id: vivaanId
        },
        {
          name: "Shaadi Waala Chicken Curry",
          description:
            "Chicken curry usually served in weddings back home (Must Try)",
          price: "$26.00",
          restaurant_id: vivaanId
        },
        {
          name: "Shahi Tukda",
          description:
            "Chef’s signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.",
          price: "$11.00",
          restaurant_id: vivaanId
        },
        {
          name: "Four-In-One Chicken",
          description:
            "Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven",
          price: "$16.99",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Chicken Tikka",
          description:
            "Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven",
          price: "$16.99",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Paneer Tikka",
          description:
            "Tandoori Paneer Tikka is made from homemade cottage cheese which is marinated in yogurt and dry aromatic Indian spices along with diced onions and capsicum and grilled in clay oven",
          price: "$16.99",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Fish Tikka",
          description:
            "Deboned fish marinated in ginger, garlic and other spices and grilled in clay oven",
          price: "$16.99",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Prawn Tandoori",
          description:
            "Large juicy prawn marinated in ginger, garlic, fresh squeezed lemon juice and along with various dry spices and grilled in clay oven",
          price: "$19.49",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Mixed Grill",
          description:
            "Tandoori chicken, lamb tikka, chicken tikka and fish grilled in our clay oven",
          price: "$20.99",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Coconut Curry",
          description:
            "Choice of boneless chicken breast, lamb, beef, fish or shrimp cooked in a creamy coconut, butter and onion sauce",
          price: "15.99",
          restaurant_id: RamaKrishnaId
        },
        {
          name: "Quilon Chicken",
          description:
            "free range grass fed chicken cooked in a tangy tomato masala",
          price: "$25.00",
          restaurant_id: coconutLagoonId
        },
        {
          name: "Mariposa's Duck Biryani**",
          description: "slow baked in kiama rice, quail egg and raita",
          price: "$26.00",
          restaurant_id: coconutLagoonId
        },
        {
          name: "Pala Lamb Peralan",
          description: "tender morsels of lamb in an exotic masala",
          price: "$26.00",
          restaurant_id: coconutLagoonId
        },
        {
          name: "Roasted Salmon In Moilee Sauce",
          description: "marinated in green mango, spices and roasted",
          price: "$27.00",
          restaurant_id: coconutLagoonId
        },
        {
          name: "Vegetable Aviyal",
          description:
            "assorted vegetables cooked in yoghurt, coconut spiked with cumin",
          price: "$22.00",
          restaurant_id: coconutLagoonId
        },
        {
          name: "Aloo Tiki",
          description:
            "Potato croquette topped with pickled seasonal vegetables and an assortment of chutneys",
          price: "$12.00",
          restaurant_id: lastTrainToDelhiId
        },
        {
          name: "Spicy Lamb Chops",
          description:
            "Lamb chops are coated in a spicy marinade and seared. It's paired with mint chutney, mango chutney, and raita. Allergens: Meat",
          price: "16.00",
          restaurant_id: lastTrainToDelhiId
        },
        {
          name: "Crispy Shrimp",
          description:
            "Tandoori shrimp wrapped in crispy potato accompanied by a seasonal chutney and micro greens from the garden",
          price: "$15.00",
          restaurant_id: lastTrainToDelhiId
        },
        {
          name: "Bhaingan Bharta",
          description: "Smokey eggplant and peas",
          price: "$17.00",
          restaurant_id: lastTrainToDelhiId
        },
        {
          name: "Kofta Curry",
          description:
            "Indian kofta served with bottleneck gourds and potatoes in a cashew coconut sauce",
          price: "$20.00",
          restaurant_id: lastTrainToDelhiId
        },
        {
          name: "murgh salaad",
          description: "Chicken breast, mix greens, mint vinegar dressing",
          price: "$18.00",
          restaurant_id: adrakYorkvilleId
        },
        {
          name: "papad ki tokri",
          description: "Papadams, assorted chutneys & salsa",
          price: "$18.00",
          restaurant_id: adrakYorkvilleId
        },
        {
          name: "khumb korma",
          description:
            "Aged basmati rice, marinated lamb & puff pastry cover, garlic yogurt",
          price: "$36.00",
          restaurant_id: adrakYorkvilleId
        },
        {
          name: "dal tadka",
          description: "Yellow lentils, indian tempering",
          price: "$20.00",
          restaurant_id: adrakYorkvilleId
        },
        {
          name: "cocochoco rasmalai cheese cake",
          description:
            "Coconut crémeux, chocolate hazelnut crunch, coconut snow, citrus gel, cardamom ice cream",
          price: "$19.00",
          restaurant_id: adrakYorkvilleId
        },
        {
          name: "Molasses Braised Beef Cheeks Curry",
          description:
            "Caramelised root vegetables, deggi mirch, buttermilk onion rings",
          price: "$32.00",
          restaurant_id: curryishTavernId
        },
        {
          name: "Coconut Vatan Stuffed Whole Branzino",
          description: "Turmeric lemon butter sauce, curry leaves, mustard seeds",
          price: "$39.00",
          restaurant_id: curryishTavernId
        },
        {
          name: "Goan Chorizo + Braised Pork Shoulder Curry",
          description:
            "Double smoked bacon, roasted parsnips, red kidney beans, apple achar",
          price: "$31.00",
          restaurant_id: curryishTavernId
        },
        {
          name: "Screech Rum Soaked Gulab Jamun",
          description: "Whipped mascarpone cream, pistachio crumble",
          price: "$14.00",
          restaurant_id: curryishTavernId
        },
        {
          name: "Ontario Apple + Almond Halwa Tart",
          description: "Whipped cinnamon malai, red currants",
          price: "$14.00",
          restaurant_id: curryishTavernId
        },
        {
          name: "Vegetable samosa",
          description: "Seasoned potatoes and peas wrapped in a light pastry",
          price: "$4.00",
          restaurant_id: utsavId
        },
        {
          name: "Goan fish curry",
          description:
            "Filet of salmon cooked in a traditional hot and tangy coconut curry",
          price: "$15.00",
          restaurant_id: utsavId
        },
        {
          name: "Lamb vindaloo",
          description:
            "A delicacy from Goa - Boneless lamb cooked in a hot, spicy and tangy sauce with potatoes",
          price: "$14.00",
          restaurant_id: utsavId
        },
        {
          name: "Matar paneer",
          description:
            "Cottage cheese and green peas cooked in butter flavored onion and tomato gravy",
          price: "$10.00",
          restaurant_id: utsavId
        },
        {
          name: "Chicken vindaloo",
          description:
            "Chicken cooked with herbs and spices in special hot spicy and tangy sauce with potatoes",
          price: "$14.00",
          restaurant_id: utsavId
        },
        {
          name: "Chicken jalfrezi",
          description:
            "Chicken cooked with delicious mix of green peppers, onions, green chillies and tomatoes",
          price: "$14.00",
          restaurant_id: utsavId
        },
        {
          name: "Lamb Lollipops",
          description: "grilled chops with turmeric, mint and fenugreek curry",
          price: "$44.00",
          restaurant_id: pukkaId
        },
        {
          name: "Vegan Tikka Masala",
          description: "tofu, sweet peppers, red onion, tomato and cashew cream",
          price: "$23.00",
          restaurant_id: pukkaId
        },
        {
          name: "Short Ribs",
          description:
            "PEI beef braised with black cumin, cloves, cardamom and fennel seeds",
          price: "$32.00",
          restaurant_id: pukkaId
        },
        {
          name: "Punjabi Chicken Curry",
          description: "spicy home-style chicken curry",
          price: "$24.00",
          restaurant_id: pukkaId
        },
        {
          name: "Pukka Chaat",
          description:
            "string vegetables, sprouts, rice crisps, pomegranate, mango, green apple, chutneys and yoghurt",
          price: "$16.00",
          restaurant_id: pukkaId
        },
        {
          name: "Chicken Tikka",
          description:
            "herb-infused white meat, tandoor roasted and served with tamarind chutney",
          price: "$21.00",
          restaurant_id: pukkaId
        },
        {
          name: "Butter Chicken Poutine",
          description:
            "Fries are served topped with melting cheese and butter chicken gravy",
          price: "$8.99",
          restaurant_id: kamasutraIndianId
        },
        {
          name: "Vegetable Appy Platter",
          description:
            "2 Vegetable samosas, vegetable pakora, paneer pakora, 1 papadum, served with chickpea curry",
          price: "$13.99",
          restaurant_id: kamasutraIndianId
        },
        {
          name: "Pulled Chicken",
          description: "marinated chicken with salsa",
          price: "12.00",
          restaurant_id: eldoradoTacoId
        },
        {
          name: "Fettuccine Pescatore",
          description: "Scallops, mussels, shrimp and crab meat in a rose sauce",
          price: "$33.00",
          restaurant_id: laBartolaId
        },
        {
          name: "Colosseo Pizze",
          description:
            "Luciano's spicy Italian sausage, black olives, hot peppers, mozzarella and parmigiano cheeses",
          price: "$22.00",
          restaurant_id: laBartolaId
        },
        {
          name: "Vitello alla Griglia",
          description:
            "Grilled veal medallion, with seasonal vegetables and potatoes",
          price: "$35.00",
          restaurant_id: laBartolaId
        },
        {
          name: "Agnello",
          description:
            "Grilled lamb chops in a citrus marinade, with seasonal vegetables and potatoes",
          price: "$35.00",
          restaurant_id: laBartolaId
        },
        {
          name: "Orata ai Porri",
          description: "$32.00",
          price:
            "Pan seared sea bream filet with sautéed leeks, served over a wild rice medley and greens",
          restaurant_id: laBartolaId
        },
        {
          name: "Insalata di Mare",
          description:
            "Mixed greens tossed in our house viniagriette, topped with grilled shrimp and crab meat",
          price: "$25.00",
          restaurant_id: laBartolaId
        },
        {
          name: "PASTOR",
          description:
            "Marinated shaved pork, pineapple, red onion dice, cilantro, salsa verde, corn tortilla",
          price: "$23.00",
          restaurant_id: elCatrinId
        },
        {
          name: "COCHINITA PIBIL",
          description:
            "Achiote rubbed pork, black bean puree, pickled red onion, cilantro, habanero salsa",
          price: "$23.00",
          restaurant_id: elCatrinId
        },
        {
          name: "Seafood Molcajete",
          description: "Grilled calamari, morita garlic shrimp, octopus",
          price: "$23.00",
          restaurant_id: mariachisId
        },
        {
          name: "Sirloin Steak & Tuetano Osso Buco",
          description:
            "Bone marrow, slow cooked in the oven, topped with our seasoning",
          price: "$26.00",
          restaurant_id: mariachisId
        },
        {
          name: "Fajitas",
          description:
            "A sizzling bed of onions and bell peppers topped with your choice of protein",
          price: "$17.50",
          restaurant_id: mariachisId
        },
        {
          name: "Hamachi",
          description:
            "Ponzu à la truffe, truffe noire râpée [Salmon Tataki, Truffle ponzu, Shaved black truffle]",
          price: "$24.00",
          restaurant_id: canoRestaurantId
        },
        {
          name: "Tartare de Thon",
          description:
            "Soja Yuzu, piment serrano [Hot Hamachi, Yuzu soy, Serrano pepper]",
          price: "$24.00",
          restaurant_id: canoRestaurantId
        },
        {
          name: "Tataki de Saumon",
          description:
            "Purée d'avocat, chili soja [Tuna Tartar, Avocado puree, Chili soy]",
          price: "$27.00",
          restaurant_id: canoRestaurantId
        },
        {
          name: "Tomato Braised Beef Cheek Ragu",
          description:
            "Wild Mushrooms, Sweet Potato & Ricotta Gnocchi, Fresh Basil",
          price: "$29.00",
          restaurant_id: bluRistoranteId
        },
        {
          name: "Roasted Butternut Squash Ravioli",
          description:
            "Gorgonzola, Balsamic Reduction, Brown Butter, Crispy Sage",
          price: "$33.00",
          restaurant_id: bluRistoranteId
        },
        {
          name: "Pan Seared Atlantic Salmon",
          description:
            "Heirloom Carrots, Green Beans, Parsnip Puree, Beluga Lentils & Barley, Chive Oil",
          price: "$33.00",
          restaurant_id: bluRistoranteId
        },
        {
          name: "Woodfire Grilled 12oz AAA Ribeye",
          description:
            "Heirloom Carrots, Green Beans, Sweet Potato Gratin, Mushroom Veal jus",
          price: "$55.00",
          restaurant_id: bluRistoranteId
        },
        {
          name: "Pizzoccheri di Teglio",
          description:
            "Homemade short buckwheat Pasta coated in three-cheese sauce, savoy cabbage, potatoes, butter and sage",
          price: "$24.00",
          restaurant_id: stelvioId
        },
        {
          name: "Gnocchi al Gorgonzola",
          description: "Fresh homemade Gnocchi served in a blue cheese sauce",
          price: "$23.00",
          restaurant_id: stelvioId
        },
        {
          name: "Risotto ai Funghi",
          description: "Aironi Carnaroli risotto served with mushrooms",
          price: "$26.00",
          restaurant_id: stelvioId
        },
        {
          name: "Spezzatino con Polenta",
          description:
            "Traditional Northern Italian Specialty. Slow-cooked feef stew, cooked in tomato sauce and red wine reduction, served over soft polenta",
          price: "$26.00",
          restaurant_id: stelvioId
        }
      ]
    })
  */
  const userLaith = await prisma.user.create({
    data: {
      first_name: "Laith",
      last_name: "Harb",
      email: "laith@hotmail.com",
      city: "ottawa",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userJosh = await prisma.user.create({
    data: {
      first_name: "Josh",
      last_name: "Allen",
      email: "josh@hotmail.com",
      city: "toronto",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userLebron = await prisma.user.create({
    data: {
      first_name: "LeBron",
      last_name: "James",
      email: "lebron@hotmail.com",
      city: "niagara",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userCassidy = await prisma.user.create({
    data: {
      first_name: "Cassidy",
      last_name: "Marksom",
      email: "cassidy@hotmail.com",
      city: "toronto",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });
  await prisma.review.createMany({
    data: [
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: vivaanId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Extremely disappointing in our experience.",
        rating: 2,
        restaurant_id: laBartolaId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
        rating: 5,
        restaurant_id: kamasutraIndianId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Restaurant was loud and crowded. Food is not worth the price.",
        rating: 3,
        restaurant_id: eldoradoTacoId,
        user_id: userLaith.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
        rating: 4,
        restaurant_id: vivaanId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
        rating: 5,
        restaurant_id: sofiaId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
        rating: 3,
        restaurant_id: curryishTavernId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
        rating: 3,
        restaurant_id: adrakYorkvilleId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Wonderful food and service.",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Great food, great staff. You can’t ask for much more from a restaurant.",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userJosh.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
        rating: 5,
        restaurant_id: RamaKrishnaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
        rating: 4,
        restaurant_id: lastTrainToDelhiId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
        rating: 4,
        restaurant_id: curryishTavernId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
        rating: 5,
        restaurant_id: pukkaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Very nice evening spent with special family.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userLebron.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
        rating: 4,
        restaurant_id: bluRistoranteId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
        rating: 3,
        restaurant_id: laBartolaId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: utsavId,
        user_id: userCassidy.id,
      },
    ],
  });

  await prisma.table.createMany({
    data: [
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
    ],
  });

  res.status(200).json({ name: "hello" })
}




// BACKUP

/*

import { PRICE, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  await prisma.table.deleteMany();
  await prisma.review.deleteMany();
  await prisma.item.deleteMany()
  await prisma.restaurant.deleteMany()
  await prisma.location.deleteMany()
  await prisma.cuisine.deleteMany()
  await prisma.user.deleteMany();

  await prisma.location.createMany({
    data: [{ name: "تهران" }, { name: "مشهد" }, { name: "مازندران" }]
  })

  await prisma.cuisine.createMany({
    data: [{ name: "فست فود" }, { name: "سنتی" }, { name: "شمالی" }]
  })

  const locations = await prisma.location.findMany()
  const cuisines = await prisma.cuisine.findMany()

  const indianCuisineId =
    cuisines.find(cuisine => cuisine.name === "فست فود")?.id || 1
  const mexicanCuisineId =
    cuisines.find(cuisine => cuisine.name === "شمالی")?.id || 1
  const italianCuisineId =
    cuisines.find(cuisine => cuisine.name === "سنتی")?.id || 1

  const ottawaLocationId =
    locations.find(location => location.name === "تهران")?.id || 1
  const torontoLocationId =
    locations.find(location => location.name === "مشهد")?.id || 1
  const niagaraLocationId =
    locations.find(location => location.name === "مازندران")?.id || 1

  await prisma.restaurant.createMany({
    data: [
      // INDIAN //
      {
        name: "Vivaan - fine Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/32109459.jpg",
        price: PRICE.REGULAR,
        description:
          "Vivaan is Modern Indian Cuisine serving dishes from different regions of India. We carefully select our ingredients and use them to make authentic Indian recipes and our chef puts his modern flair and twists to the dishes.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/32109461.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32459786.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484701.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32484708.jpg"
        ],
        open_time: "14:30:00.000Z",
        close_time: "21:30:00.000Z",
        slug: "vivaan-fine-indian-cuisine-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "RamaKrishna Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47417441.jpg",
        price: PRICE.CHEAP,
        description:
          "With 20 years of experience cooking in the finest restaurants, our chef is excited to present their vision to you and all our guests. Our caring and committed staff will ensure you have a fantastic experience with us.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417455.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417456.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47417457.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47417458.jpg"
        ],
        open_time: "12:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "ramakrishna-indian-restaurant-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Coconut Lagoon",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/48545745.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At Coconut Lagoon prepare yourselves for a most memorable journey through South Indian cuisine and feast on high quality food of inimitable flavour, aroma and originality in the vibrant setting of Coconut Lagoon.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045353.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48545766.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30045356.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49399187.jpg"
        ],
        open_time: "17:30:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "coconut-lagoon-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Last Train to Delhi",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/26429498.jpg",
        price: PRICE.REGULAR,
        description:
          "Welcome to Last Train to Delhi. We are a progressive Indian restaurant in the beautiful Glebe community in Ottawa. Our speciality is Northern Indian food, classics like Murg Mahkini and some modern dishes like Crispy Shrimp. We are a small cozy restaurant, so make sure that you reserve through OpenTable.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29477326.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29777084.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104059.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32104066.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "last-train-to-delhi-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Adrak Yorkville",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/4/47914200.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Namaste and welcome to Adrak - a place where food unites all. We take you through a journey of the past and present, as we hope to encourage thought-provoking conversations amid elevated Indian food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/47914186.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980632.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/47980634.jpg"
        ],
        open_time: "16:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "adrak-yorkville-toronto",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Curryish Tavern",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49294128.jpg",
        price: PRICE.REGULAR,
        description:
          "The most unique Indian food in the world! We are inspired by the seasons of Ontario and the cooking techniques of the world. Regale in the imagination of Chef Miheer Shete's dishes and change your palate for life.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765139.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765149.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765157.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48765162.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "curryish-tavern-toronto",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Utsav",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
        price: PRICE.CHEAP,
        description:
          "Utsav is an ancient Sanskrit word meaning festival. An integral part of Indian culture, Indian festivals are innumerable and equally varied in origin from the Himalayan foothills to the Peninsula's tip and food plays a very prominent part of the festive events.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/26646761.jpg"
        ],
        open_time: "14:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "utsav-toronto",
        location_id: torontoLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Pukka",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/1/25733300.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At this refined, yet casual, Indian restaurant, the portions are large, the wine list is top-notch, and the ambience encourages sharing.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733294.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733295.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733296.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25733297.jpg"
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "pukka-niagara",
        location_id: niagaraLocationId,
        cuisine_id: indianCuisineId
      },
      {
        name: "Kamasutra Indian",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25602522.jpg",
        price: PRICE.CHEAP,
        description:
          "This elegant fine dining Indian Restaurant has been satisfying the Indian tandoori and curry cravings for 12 years in Toronto.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854185.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/31854188.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25684161.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26009011.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "kamasutra-indian-restaurant-and-wine-bar-niagara",
        location_id: niagaraLocationId,
        cuisine_id: indianCuisineId
      },
      // MEXICAN //
      {
        name: "Eldorado Taco",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/42557297.jpg",
        price: PRICE.REGULAR,
        description:
          "Eldorado Taco restaurant is excited to serve you traditional Mexican cuisine, re-imagined with a distinct modern flair, in a stylish setting on Preston street. Striving to bring you some of Ottawa’s best Tacos, margaritas and Tequila. Reserve your table now!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501707.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/29501713.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/29501715.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/42557295.jpg"
        ],
        open_time: "16:00:00.000Z",
        close_time: "19:00:00.000Z",
        slug: "eldorado-taco-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "La Bartola",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/48981502.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "At La Bartola, we inspire a passion for authentic Mexican flavours. We use simple, fresh, and high-quality local & Mexican ingredients to craft delicious and thoughtful food.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981480.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981483.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981485.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981487.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981490.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48981492.jpg"
        ],
        open_time: "12:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "la-bartola-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "El Catrin",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/28028883.png",
        price: PRICE.CHEAP,
        description:
          "Reservations are booked for indoors only. Seating time will be limited to two hours maximum.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770621.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770622.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770624.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25770625.jpg"
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "3 Mariachis",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/32449465.jpg",
        price: PRICE.CHEAP,
        description:
          "Specializing in the preparation of high quality Mexican food. Our vibrant décor, carefully selected menu, great staff and exciting entertainment will ensure that you are treated to a unique dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490939.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32490987.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/32507838.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/41724689.jpg"
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-catrin-toronto",
        location_id: torontoLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "Casa Madera",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47744844.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "The first location in Canada, from famed restauranteurs Noble 33, welcomes patrons into an immersive dining experience.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745080.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745081.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745093.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745144.jpg"
        ],
        open_time: "15:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-toronto",
        location_id: torontoLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "Taco N Tequila",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47429858.jpg",
        price: PRICE.CHEAP,
        description:
          "As a family owned business, our goal is simple: to consistently deliver fresh and delicious Mexican flavours in a FUN and friendly atmosphere with the best service around!",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47600418.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429797.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429802.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47745097.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/47429814.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "casa-madera-niagara",
        location_id: niagaraLocationId,
        cuisine_id: mexicanCuisineId
      },
      {
        name: "El Jefe",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/47710768.jpg",
        price: PRICE.CHEAP,
        description:
          "Lively cantina serving Mexican favorites & potent margaritas in a vibrant, airy space with murals.",
        images: [],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "el-jefe-niagara",
        location_id: niagaraLocationId,
        cuisine_id: mexicanCuisineId
      },
      // ITALIAN //
      {
        name: "Cano Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/43463549.jpg",
        price: PRICE.REGULAR,
        description:
          "Our back patio has now officially reopened for FOOD SERVICE only. Drinks can be ordered and consumed at the bar before, during, or after dinner service.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463554.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463742.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463745.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463748.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/43463750.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/43463751.jpg"
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "cano-restaurant-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "Blu Ristorante",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/2/47350167.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Victorian Building with two floors of dining space and large side and front patio. Tastefully designed to host your special event, romantic dinner, corporate buyout or a celebration of any sort.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305566.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305567.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305568.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305569.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25305570.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/30091570.jpg"
        ],
        open_time: "15:00:00.000Z",
        close_time: "22:00:00.000Z",
        slug: "blu-ristorante-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "Stelvio",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/50557365.jpg",
        price: PRICE.REGULAR,
        description:
          "Stelvio on Dundas West is an authentic Italian restaurant serving classic old world fare using traditional recipes and ingredients. Recipes have been fine-tuned to satisfy the palate of the modern guest, and fresh meals are prepared daily.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/3/26374971.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374974.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374975.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/26374976.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/50557389.jpg"
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "stelvio-ottawa",
        location_id: ottawaLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "Terroni Adelaide",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/46827195.jpg",
        price: PRICE.REGULAR,
        description:
          "Terroni Adelaide’s multi-level location is located in Toronto’s historic York County Court House circa 1853.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309468.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309469.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309470.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309472.png",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/42309474.png"
        ],
        open_time: "12:00:00.000Z",
        close_time: "18:00:00.000Z",
        slug: "terroni-adelaide-niagara",
        location_id: niagaraLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "EST Restaurant",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49169798.jpg",
        price: PRICE.CHEAP,
        description:
          "ēst is a modern, newly reopened restaurant serving Italian-French courses, captivating cocktails and wine.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253937.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253940.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49253941.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415599.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49415604.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49696221.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/1/49999039.jpg"
        ],
        open_time: "09:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "est-restaurant-niagara",
        location_id: niagaraLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "Sofia",
        main_image:
          "https://resizer.otstatic.com/v2/photos/xlarge/1/25558850.jpg",
        price: PRICE.EXPENSIVE,
        description:
          "Tapping into true Italian tastes, the menu starts with a selection of antipasti including a citrus salad and grilled octopus, and a plentiful selection of crudo. ",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/25629442.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25636273.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25679656.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/25825772.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/26011606.jpg"
        ],
        open_time: "13:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "sofia-toronto",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "Terroni Sud Forno",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49463645.png",
        price: PRICE.REGULAR,
        description:
          "Spaccio West, near the Lower Junction on the West Toronto Railpath, acts as the backstage to the main show taking place at all Terroni locations.",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741813.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741816.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741821.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741826.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/48741827.jpg"
        ],
        open_time: "10:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "terroni-sud-forno-produzione-e-spaccio-toronto",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId
      },
      {
        name: "il Padrino",
        main_image:
          "https://resizer.otstatic.com/v2/photos/wide-huge/3/49616181.jpg",
        price: PRICE.CHEAP,
        description:
          "Welcome to the newest edition to College street iL PADRINO Ristorante has joined the list of Italian restaurants where Chef Connie award winning Italian Chef makes every Italian dish with love like no other. ",
        images: [
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494556.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494562.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/2/49494563.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49494887.jpg",
          "https://resizer.otstatic.com/v2/photos/xlarge/3/49533502.jpg"
        ],
        open_time: "07:00:00.000Z",
        close_time: "21:00:00.000Z",
        slug: "il-padrino-toronto",
        location_id: torontoLocationId,
        cuisine_id: italianCuisineId
      }
    ]
  })

  const restaurants = await prisma.restaurant.findMany()

  const vivaanId =
    restaurants.find(restaurant => restaurant.name === "ایژین لانژ")
      ?.id || 1
  const RamaKrishnaId =
    restaurants.find(restaurant => restaurant.name === "زودیاک لانژ")
      ?.id || 1
  const coconutLagoonId =
    restaurants.find(restaurant => restaurant.name === "باماریا")?.id ||
    1
  const lastTrainToDelhiId =
    restaurants.find(restaurant => restaurant.name === "شکم الملوک")
      ?.id || 1
  const adrakYorkvilleId =
    restaurants.find(restaurant => restaurant.name === "ماکسیم")?.id ||
    1
  const curryishTavernId =
    restaurants.find(restaurant => restaurant.name === "ونوشک")?.id ||
    1
  const utsavId =
    restaurants.find(restaurant => restaurant.name === "دلبار")?.id || 1
  const pukkaId =
    restaurants.find(restaurant => restaurant.name === "بیف لاین")?.id || 1
  const kamasutraIndianId =
    restaurants.find(restaurant => restaurant.name === "چشم تهران")
      ?.id || 1
  const eldoradoTacoId =
    restaurants.find(restaurant => restaurant.name === "رومیصا")?.id || 1
  const laBartolaId =
    restaurants.find(restaurant => restaurant.name === "میخوش")?.id || 1
  const elCatrinId =
    restaurants.find(restaurant => restaurant.name === "گاردینو پلاس")?.id || 1
  const mariachisId =
    restaurants.find(restaurant => restaurant.name === "طهران باربیکیو")?.id || 1
  const canoRestaurantId =
    restaurants.find(restaurant => restaurant.name === "باغ ایرانی")?.id ||
    1
  const bluRistoranteId =
    restaurants.find(restaurant => restaurant.name === "ستاره قصران")?.id ||
    1
  const stelvioId =
    restaurants.find(restaurant => restaurant.name === "مهر و ماه")?.id || 1
  const sofiaId =
    restaurants.find(restaurant => restaurant.name === "امیر انفجار")?.id || 1

  await prisma.item.createMany({
    data: [
      {
        name: "Ghee roast chicken wings",
        description:
          "Crispy chicken wings coated in a sauce made from roasted whole spices and clarified butter.",
        price: "$18.00",
        restaurant_id: vivaanId
      },
      {
        name: "Sol Kadhi scallop ceviche",
        description: "Cured scallop served with mangosteen and coconut broth",
        price: "$18.00",
        restaurant_id: vivaanId
      },
      {
        name: "Butte ka kees",
        description:
          "Bhutte( Corn) Khees( grated) and spiced and tempered served with waffers",
        price: "$17.00",
        restaurant_id: vivaanId
      },
      {
        name: "Burrata Paapdi Chaat",
        description:
          "Our house made paapdi served with spiced potatoes and burrata cheese dressed with in house chutneys",
        price: "$16.00",
        restaurant_id: vivaanId
      },
      {
        name: "Shaadi Waala Chicken Curry",
        description:
          "Chicken curry usually served in weddings back home (Must Try)",
        price: "$26.00",
        restaurant_id: vivaanId
      },
      {
        name: "Shahi Tukda",
        description:
          "Chef’s signature dessert : crispy bread poched with flavoured milk and topped with homemade cream made of pistachios, rose.",
        price: "$11.00",
        restaurant_id: vivaanId
      },
      {
        name: "Four-In-One Chicken",
        description:
          "Boneless chicken breast pieces marinated with four different kind of texture and Indian spices for each piece and grilled in clay oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Chicken Tikka",
        description:
          "Boneless Chicken marinated overnight with yogurt, Indian spices and cooked in a Tandoor oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Paneer Tikka",
        description:
          "Tandoori Paneer Tikka is made from homemade cottage cheese which is marinated in yogurt and dry aromatic Indian spices along with diced onions and capsicum and grilled in clay oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Fish Tikka",
        description:
          "Deboned fish marinated in ginger, garlic and other spices and grilled in clay oven",
        price: "$16.99",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Prawn Tandoori",
        description:
          "Large juicy prawn marinated in ginger, garlic, fresh squeezed lemon juice and along with various dry spices and grilled in clay oven",
        price: "$19.49",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Mixed Grill",
        description:
          "Tandoori chicken, lamb tikka, chicken tikka and fish grilled in our clay oven",
        price: "$20.99",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Coconut Curry",
        description:
          "Choice of boneless chicken breast, lamb, beef, fish or shrimp cooked in a creamy coconut, butter and onion sauce",
        price: "15.99",
        restaurant_id: RamaKrishnaId
      },
      {
        name: "Quilon Chicken",
        description:
          "free range grass fed chicken cooked in a tangy tomato masala",
        price: "$25.00",
        restaurant_id: coconutLagoonId
      },
      {
        name: "Mariposa's Duck Biryani**",
        description: "slow baked in kiama rice, quail egg and raita",
        price: "$26.00",
        restaurant_id: coconutLagoonId
      },
      {
        name: "Pala Lamb Peralan",
        description: "tender morsels of lamb in an exotic masala",
        price: "$26.00",
        restaurant_id: coconutLagoonId
      },
      {
        name: "Roasted Salmon In Moilee Sauce",
        description: "marinated in green mango, spices and roasted",
        price: "$27.00",
        restaurant_id: coconutLagoonId
      },
      {
        name: "Vegetable Aviyal",
        description:
          "assorted vegetables cooked in yoghurt, coconut spiked with cumin",
        price: "$22.00",
        restaurant_id: coconutLagoonId
      },
      {
        name: "Aloo Tiki",
        description:
          "Potato croquette topped with pickled seasonal vegetables and an assortment of chutneys",
        price: "$12.00",
        restaurant_id: lastTrainToDelhiId
      },
      {
        name: "Spicy Lamb Chops",
        description:
          "Lamb chops are coated in a spicy marinade and seared. It's paired with mint chutney, mango chutney, and raita. Allergens: Meat",
        price: "16.00",
        restaurant_id: lastTrainToDelhiId
      },
      {
        name: "Crispy Shrimp",
        description:
          "Tandoori shrimp wrapped in crispy potato accompanied by a seasonal chutney and micro greens from the garden",
        price: "$15.00",
        restaurant_id: lastTrainToDelhiId
      },
      {
        name: "Bhaingan Bharta",
        description: "Smokey eggplant and peas",
        price: "$17.00",
        restaurant_id: lastTrainToDelhiId
      },
      {
        name: "Kofta Curry",
        description:
          "Indian kofta served with bottleneck gourds and potatoes in a cashew coconut sauce",
        price: "$20.00",
        restaurant_id: lastTrainToDelhiId
      },
      {
        name: "murgh salaad",
        description: "Chicken breast, mix greens, mint vinegar dressing",
        price: "$18.00",
        restaurant_id: adrakYorkvilleId
      },
      {
        name: "papad ki tokri",
        description: "Papadams, assorted chutneys & salsa",
        price: "$18.00",
        restaurant_id: adrakYorkvilleId
      },
      {
        name: "khumb korma",
        description:
          "Aged basmati rice, marinated lamb & puff pastry cover, garlic yogurt",
        price: "$36.00",
        restaurant_id: adrakYorkvilleId
      },
      {
        name: "dal tadka",
        description: "Yellow lentils, indian tempering",
        price: "$20.00",
        restaurant_id: adrakYorkvilleId
      },
      {
        name: "cocochoco rasmalai cheese cake",
        description:
          "Coconut crémeux, chocolate hazelnut crunch, coconut snow, citrus gel, cardamom ice cream",
        price: "$19.00",
        restaurant_id: adrakYorkvilleId
      },
      {
        name: "Molasses Braised Beef Cheeks Curry",
        description:
          "Caramelised root vegetables, deggi mirch, buttermilk onion rings",
        price: "$32.00",
        restaurant_id: curryishTavernId
      },
      {
        name: "Coconut Vatan Stuffed Whole Branzino",
        description: "Turmeric lemon butter sauce, curry leaves, mustard seeds",
        price: "$39.00",
        restaurant_id: curryishTavernId
      },
      {
        name: "Goan Chorizo + Braised Pork Shoulder Curry",
        description:
          "Double smoked bacon, roasted parsnips, red kidney beans, apple achar",
        price: "$31.00",
        restaurant_id: curryishTavernId
      },
      {
        name: "Screech Rum Soaked Gulab Jamun",
        description: "Whipped mascarpone cream, pistachio crumble",
        price: "$14.00",
        restaurant_id: curryishTavernId
      },
      {
        name: "Ontario Apple + Almond Halwa Tart",
        description: "Whipped cinnamon malai, red currants",
        price: "$14.00",
        restaurant_id: curryishTavernId
      },
      {
        name: "Vegetable samosa",
        description: "Seasoned potatoes and peas wrapped in a light pastry",
        price: "$4.00",
        restaurant_id: utsavId
      },
      {
        name: "Goan fish curry",
        description:
          "Filet of salmon cooked in a traditional hot and tangy coconut curry",
        price: "$15.00",
        restaurant_id: utsavId
      },
      {
        name: "Lamb vindaloo",
        description:
          "A delicacy from Goa - Boneless lamb cooked in a hot, spicy and tangy sauce with potatoes",
        price: "$14.00",
        restaurant_id: utsavId
      },
      {
        name: "Matar paneer",
        description:
          "Cottage cheese and green peas cooked in butter flavored onion and tomato gravy",
        price: "$10.00",
        restaurant_id: utsavId
      },
      {
        name: "Chicken vindaloo",
        description:
          "Chicken cooked with herbs and spices in special hot spicy and tangy sauce with potatoes",
        price: "$14.00",
        restaurant_id: utsavId
      },
      {
        name: "Chicken jalfrezi",
        description:
          "Chicken cooked with delicious mix of green peppers, onions, green chillies and tomatoes",
        price: "$14.00",
        restaurant_id: utsavId
      },
      {
        name: "Lamb Lollipops",
        description: "grilled chops with turmeric, mint and fenugreek curry",
        price: "$44.00",
        restaurant_id: pukkaId
      },
      {
        name: "Vegan Tikka Masala",
        description: "tofu, sweet peppers, red onion, tomato and cashew cream",
        price: "$23.00",
        restaurant_id: pukkaId
      },
      {
        name: "Short Ribs",
        description:
          "PEI beef braised with black cumin, cloves, cardamom and fennel seeds",
        price: "$32.00",
        restaurant_id: pukkaId
      },
      {
        name: "Punjabi Chicken Curry",
        description: "spicy home-style chicken curry",
        price: "$24.00",
        restaurant_id: pukkaId
      },
      {
        name: "Pukka Chaat",
        description:
          "string vegetables, sprouts, rice crisps, pomegranate, mango, green apple, chutneys and yoghurt",
        price: "$16.00",
        restaurant_id: pukkaId
      },
      {
        name: "Chicken Tikka",
        description:
          "herb-infused white meat, tandoor roasted and served with tamarind chutney",
        price: "$21.00",
        restaurant_id: pukkaId
      },
      {
        name: "Butter Chicken Poutine",
        description:
          "Fries are served topped with melting cheese and butter chicken gravy",
        price: "$8.99",
        restaurant_id: kamasutraIndianId
      },
      {
        name: "Vegetable Appy Platter",
        description:
          "2 Vegetable samosas, vegetable pakora, paneer pakora, 1 papadum, served with chickpea curry",
        price: "$13.99",
        restaurant_id: kamasutraIndianId
      },
      {
        name: "Pulled Chicken",
        description: "marinated chicken with salsa",
        price: "12.00",
        restaurant_id: eldoradoTacoId
      },
      {
        name: "Fettuccine Pescatore",
        description: "Scallops, mussels, shrimp and crab meat in a rose sauce",
        price: "$33.00",
        restaurant_id: laBartolaId
      },
      {
        name: "Colosseo Pizze",
        description:
          "Luciano's spicy Italian sausage, black olives, hot peppers, mozzarella and parmigiano cheeses",
        price: "$22.00",
        restaurant_id: laBartolaId
      },
      {
        name: "Vitello alla Griglia",
        description:
          "Grilled veal medallion, with seasonal vegetables and potatoes",
        price: "$35.00",
        restaurant_id: laBartolaId
      },
      {
        name: "Agnello",
        description:
          "Grilled lamb chops in a citrus marinade, with seasonal vegetables and potatoes",
        price: "$35.00",
        restaurant_id: laBartolaId
      },
      {
        name: "Orata ai Porri",
        description: "$32.00",
        price:
          "Pan seared sea bream filet with sautéed leeks, served over a wild rice medley and greens",
        restaurant_id: laBartolaId
      },
      {
        name: "Insalata di Mare",
        description:
          "Mixed greens tossed in our house viniagriette, topped with grilled shrimp and crab meat",
        price: "$25.00",
        restaurant_id: laBartolaId
      },
      {
        name: "PASTOR",
        description:
          "Marinated shaved pork, pineapple, red onion dice, cilantro, salsa verde, corn tortilla",
        price: "$23.00",
        restaurant_id: elCatrinId
      },
      {
        name: "COCHINITA PIBIL",
        description:
          "Achiote rubbed pork, black bean puree, pickled red onion, cilantro, habanero salsa",
        price: "$23.00",
        restaurant_id: elCatrinId
      },
      {
        name: "Seafood Molcajete",
        description: "Grilled calamari, morita garlic shrimp, octopus",
        price: "$23.00",
        restaurant_id: mariachisId
      },
      {
        name: "Sirloin Steak & Tuetano Osso Buco",
        description:
          "Bone marrow, slow cooked in the oven, topped with our seasoning",
        price: "$26.00",
        restaurant_id: mariachisId
      },
      {
        name: "Fajitas",
        description:
          "A sizzling bed of onions and bell peppers topped with your choice of protein",
        price: "$17.50",
        restaurant_id: mariachisId
      },
      {
        name: "Hamachi",
        description:
          "Ponzu à la truffe, truffe noire râpée [Salmon Tataki, Truffle ponzu, Shaved black truffle]",
        price: "$24.00",
        restaurant_id: canoRestaurantId
      },
      {
        name: "Tartare de Thon",
        description:
          "Soja Yuzu, piment serrano [Hot Hamachi, Yuzu soy, Serrano pepper]",
        price: "$24.00",
        restaurant_id: canoRestaurantId
      },
      {
        name: "Tataki de Saumon",
        description:
          "Purée d'avocat, chili soja [Tuna Tartar, Avocado puree, Chili soy]",
        price: "$27.00",
        restaurant_id: canoRestaurantId
      },
      {
        name: "Tomato Braised Beef Cheek Ragu",
        description:
          "Wild Mushrooms, Sweet Potato & Ricotta Gnocchi, Fresh Basil",
        price: "$29.00",
        restaurant_id: bluRistoranteId
      },
      {
        name: "Roasted Butternut Squash Ravioli",
        description:
          "Gorgonzola, Balsamic Reduction, Brown Butter, Crispy Sage",
        price: "$33.00",
        restaurant_id: bluRistoranteId
      },
      {
        name: "Pan Seared Atlantic Salmon",
        description:
          "Heirloom Carrots, Green Beans, Parsnip Puree, Beluga Lentils & Barley, Chive Oil",
        price: "$33.00",
        restaurant_id: bluRistoranteId
      },
      {
        name: "Woodfire Grilled 12oz AAA Ribeye",
        description:
          "Heirloom Carrots, Green Beans, Sweet Potato Gratin, Mushroom Veal jus",
        price: "$55.00",
        restaurant_id: bluRistoranteId
      },
      {
        name: "Pizzoccheri di Teglio",
        description:
          "Homemade short buckwheat Pasta coated in three-cheese sauce, savoy cabbage, potatoes, butter and sage",
        price: "$24.00",
        restaurant_id: stelvioId
      },
      {
        name: "Gnocchi al Gorgonzola",
        description: "Fresh homemade Gnocchi served in a blue cheese sauce",
        price: "$23.00",
        restaurant_id: stelvioId
      },
      {
        name: "Risotto ai Funghi",
        description: "Aironi Carnaroli risotto served with mushrooms",
        price: "$26.00",
        restaurant_id: stelvioId
      },
      {
        name: "Spezzatino con Polenta",
        description:
          "Traditional Northern Italian Specialty. Slow-cooked feef stew, cooked in tomato sauce and red wine reduction, served over soft polenta",
        price: "$26.00",
        restaurant_id: stelvioId
      }
    ]
  })

  const userLaith = await prisma.user.create({
    data: {
      first_name: "Laith",
      last_name: "Harb",
      email: "laith@hotmail.com",
      city: "ottawa",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userJosh = await prisma.user.create({
    data: {
      first_name: "Josh",
      last_name: "Allen",
      email: "josh@hotmail.com",
      city: "toronto",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userLebron = await prisma.user.create({
    data: {
      first_name: "LeBron",
      last_name: "James",
      email: "lebron@hotmail.com",
      city: "niagara",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  const userCassidy = await prisma.user.create({
    data: {
      first_name: "Cassidy",
      last_name: "Marksom",
      email: "cassidy@hotmail.com",
      city: "toronto",
      password: "$2b$10$I8xkU2nQ8EAHuVOdbMy9YO/.rSU3584Y.H4LrpIujGNDtmny9FnLu",
      phone: "1112223333",
    },
  });

  await prisma.review.createMany({
    data: [
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: vivaanId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This food is so good! It is the fanciest thing I have ever seen in my short life",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Excellent food and service. Busy night, but everything was great! Highly recommend.",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Very nice place for a date night, the service was fast and friendly. The food was amazing.",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Extremely disappointing in our experience.",
        rating: 2,
        restaurant_id: laBartolaId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "This place is amazing, it has some of the best dishes in the world. It is so so so good!!!",
        rating: 5,
        restaurant_id: elCatrinId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "As always, food was excellent. Waitress was friendly and prompt. We had just one problem in that our dessert order went rogue in the system and we waited ages for it to arrive.",
        rating: 5,
        restaurant_id: kamasutraIndianId,
        user_id: userLaith.id,
      },
      {
        first_name: "Laith",
        last_name: "Harb",
        text: "Restaurant was loud and crowded. Food is not worth the price.",
        rating: 3,
        restaurant_id: eldoradoTacoId,
        user_id: userLaith.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "A Christmas lunch with clients served by a friendly server with a good wine selection everyone enjoyed the appetizers and meals",
        rating: 4,
        restaurant_id: vivaanId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The food was very tasty, the price is a little high so a place to go only for special occasions",
        rating: 5,
        restaurant_id: sofiaId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Had a great time at Chops. Our server Dane was super friendly. Dinner was delicious as always.",
        rating: 3,
        restaurant_id: curryishTavernId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "The service was poor as we had to wait a long time for our food. There were some issues but were dealt with in a proper manner.",
        rating: 3,
        restaurant_id: adrakYorkvilleId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Wonderful food and service.",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userJosh.id,
      },
      {
        first_name: "Josh",
        last_name: "Allen",
        text: "Great food, great staff. You can’t ask for much more from a restaurant.",
        rating: 5,
        restaurant_id: bluRistoranteId,
        user_id: userJosh.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Wonderful service! Delicious food! Comfortable seating and luxurious atmosphere.",
        rating: 5,
        restaurant_id: RamaKrishnaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Prime rib and filet were made spot on. Vegetable sides were made well as was the shrimp and scallops.",
        rating: 4,
        restaurant_id: lastTrainToDelhiId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "This visit was with a friend who had never been here before. She loved it as much as I do. She said it will be our new go to place!",
        rating: 4,
        restaurant_id: curryishTavernId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Had a full 3 course meal in the mid afternoon and every aspect of it was great. Server was named Brittany I believe and she was simply excellent.",
        rating: 5,
        restaurant_id: pukkaId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "Very nice evening spent with special family.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userLebron.id,
      },
      {
        first_name: "LeBron",
        last_name: "James",
        text: "First time, and not the last. Very welcoming. The food was deliscious and service very good. Highly recommend.",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userLebron.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Enjoyed our drinks, dinner and dessert. Great service and ambience.",
        rating: 5,
        restaurant_id: mariachisId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The food was absolutely on point, we had such a great experience and our server was top notch. ",
        rating: 4,
        restaurant_id: stelvioId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "The steaks were 'Melt In Your Mouth'!!! Nigel, our waiter was amazing!! Great experience overall!",
        rating: 5,
        restaurant_id: coconutLagoonId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "It was really great! Just temperature wise it was really chilly. A little mixup at the end with desserts also but overall we really enjoyed the evening",
        rating: 4,
        restaurant_id: bluRistoranteId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Food was served cold. Major No No. Fantastic Dessert. Service was good. Heavy Rock music should be toned down. Price vs Quality… not great.",
        rating: 3,
        restaurant_id: laBartolaId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: eldoradoTacoId,
        user_id: userCassidy.id,
      },
      {
        first_name: "Cassidy",
        last_name: "Mancher",
        text: "Fantastic food and excellent selection. Everything was fresh - and the scones were still warm!",
        rating: 4,
        restaurant_id: utsavId,
        user_id: userCassidy.id,
      },
    ],
  });

  await prisma.table.createMany({
    data: [
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 4,
      },
      {
        restaurant_id: vivaanId,
        seats: 2,
      },
    ],
  });

  res.status(200).json({ name: "hello" })
}


*/