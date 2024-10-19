import Spline from '@splinetool/react-spline/next';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Search, Heart, Menu } from "lucide-react"

export function Homepage() {
  const products = [
    {
      key: 1,
      name: 'Nike Dunk High',
      description: 'Custom Nike Dunk High by You Shoes',
      price: '$129.99',
      image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      isNew: true,
    },
    {
      key: 2,
      name: 'Adidas Ultraboost',
      description: 'Adidas Ultraboost DNA Running Shoes',
      price: '$159.99',
      image: 'data:image/jpeg;base64,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',
      isNew: false,
    },
    {
      key: 3,
      name: 'Puma RS-X',
      description: 'Puma RS-X Bold Sneakers',
      price: '$99.99',
      image: 'https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/24099036/2023/11/21/59447e74-07d5-4ec3-a92a-98ab3c2f91d81700553545107-RS-X-Forward-History-Sneakers-7501700553544803-1.jpg',
      isNew: true,
    },
    {
      key: 4,
      name: 'Reebok Classic',
      description: 'Reebok Classic Leather Shoes',
      price: '$89.99',
      image: 'https://photos6.spartoo.eu/photos/214/21426412/21426412_1200_A.jpg',
      isNew: false,
    },
    {
      id: 5,
      name: 'Asics Gel-Kayano',
      description: 'Asics Gel-Kayano 27 Running Shoes',
      price: '$119.99',
      image: 'https://i.ebayimg.com/images/g/TeQAAOSwHCpknX9C/s-l1600.jpg',
      isNew: true,
    },
    {
      id: 6,
      name: 'New Balance 574',
      description: 'New Balance 574 Classic Sneakers',
      price: '$79.99',
      image: 'https://images.vegnonveg.com/resized/700X573/10964/574-apollo-grey-grey-1_2-661f632249ebf.jpg',
      isNew: false,
    },
    {
      id: 7,
      name: 'Vans Old Skool',
      description: 'Vans Old Skool Skate Shoes',
      price: '$69.99',
      image: 'https://cdn-images.farfetch-contents.com/14/19/08/14/14190814_23059985_600.jpg',
      isNew: false,
    },
    {
      id: 8,
      name: 'Converse Chuck Taylor',
      description: 'Converse Chuck Taylor All Star',
      price: '$59.99',
      image: 'https://www.converse.in/media/catalog/product/m/9/m9621c_01.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover',
      isNew: false,
    },
    {
      id: 9,
      name: 'Nike Air Max 270',
      description: 'Nike Air Max 270 Lifestyle Shoes',
      price: '$149.99',
      image: 'https://5.imimg.com/data5/SELLER/Default/2020/11/BA/BT/ZF/116994281/nike-air-max-270-shoes.jpg',
      isNew: true,
    },
    {
      id: 10,
      name: 'Under Armour HOVR',
      description: 'Under Armour HOVR Phantom 2',
      price: '$139.99',
      image: 'https://assets.solesense.com/en/images/products/500/under-armour-hovr-phantom-3-storm-triple-black-3025522-001_1.jpg',
      isNew: true,
    },
    {
      id: 11,
      name: 'Saucony Jazz Original',
      description: 'Saucony Jazz Original Vintage Shoes',
      price: '$74.99',
      image: 'https://s7d4.scene7.com/is/image/WolverineWorldWide/S70755-7_1?$dw-pdp-mobile$',
      isNew: false,
    },
    {
      id: 12,
      name: 'Brooks Ghost 14',
      description: 'Brooks Ghost 14 Running Shoes',
      price: '$129.99',
      image: 'https://images-cdn.ubuy.co.in/65440e8c9650027c95463ff0-brooks-men-39-s-ghost-14-neutral.jpg',
      isNew: true,
    },
  ];
  return (
    <div className="flex flex-col min-h-screen" style={{borderWidth: '1px', borderColor: '#EDEDED', paddingLeft: 20, paddingRight:20, borderRadius:20, backgroundColor: 'black'}}>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" style={{padding: 8}}>
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="#">
              <ShoppingCart className="h-6 w-6" style={{color: 'grey'}} />
              <span className="hidden font-bold sm:inline-block" style={{color: 'grey'}}>ShopSmart</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#" style={{color: 'grey'}}>Home</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#" style={{color: 'grey'}}>Shop</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#" style={{color: 'grey'}}>Categories</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#" style={{color: 'grey'}}>About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#" style={{color: 'grey'}}>Contact</a>
            </nav>
          </div>
          <Button variant="outline" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus:ring-0 md:hidden">
            <Menu className="h-5 w-5" style={{color: 'grey'}}/>
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  style={{borderColor: '#252323',backgroundColor: 'black', color: 'white'}}
                />
              </div>
            </div>
            <nav className="flex items-center">
              <Button variant="ghost" size="icon" className="mr-2">
                <Heart className="h-4 w-4" style={{color: 'grey'}} />
                <span className="sr-only">Wishlist</span>
              </Button>
              <Button variant="ghost" size="icon" style={{color: 'grey'}} >
                <ShoppingCart className="h-4 w-4" />
                <span className="sr-only">Cart</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1" style={{backgroundColor: 'black'}}>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2" >
              <Spline
                scene="https://prod.spline.design/GcxXe4UQkHcwqsRj/scene.splinecode" 
                style={{zIndex: -1, height: '70vh', marginTop: -100, width: '90vw'}}
              />
              <div className='space-y-2'>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none" style={{color: 'white', marginTop: -400, padding: 20}}>
                  Welcome to ShopSmart
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
                  Discover amazing products at unbeatable prices. Shop smart, save big!
                </p>
              <div className="space-x-4" style={{padding: 20}}>
                <Button>Shop Now</Button>
                <Button variant="outline" >Learn More</Button>
              </div>
              </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" style={{borderRadius: 20, marginTop:100}}>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12" style={{color: 'black'}}>Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((i) => (
                <Card key={i.key}>
                  <CardContent className="p-4">
                    <img
                      alt={i.name}
                      className="aspect-square object-cover w-full rounded-lg overflow-hidden"
                      height={300}
                      src={i.image}
                      width={300}
                    />
                    <h3 className="text-lg font-bold mt-2">{i.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{i.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-lg font-bold">{i.price}</span>
                      {i.isNew && 
                      <Badge style={{backgroundColor: 'gray'}}>New</Badge>
                      }
                    </div>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 ShopSmart Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}