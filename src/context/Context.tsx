import { createContext, useState } from 'react'
import { ICardItem, IContext, IProduct, IProvider } from '../interfaces'
import { toast } from 'react-hot-toast'

export const Context = createContext({} as IContext)

export const Provider = ({ children }: IProvider) => {
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      img: 'https://cdn.shopify.com/s/files/1/0591/9316/3942/products/2-variant-redragon-k688-gaming-teclado-mecanico-rgb-backlit-78-chaves-switches-antipoeira-a-prova-de-switches-swappable-quente-ergonomico-para-o-jogador-de-computador.png?v=1678463007',
      name: 'Teclado Mecânico Redragon 1ms Switch Blue Lowprofile',
      description:
        'O teclado modelo ABC123 é extremamente rápido. Com 1ms de tempo de resposta pode digitar 1 mil palavras por segundo sem errar',
      price: 250,
      stock: 0,
      mark: 'redragon',
      category: 'teclado',
      amount: 1,
    },
    {
      id: 2,
      img: 'https://visitarbrasil.com.br/wp-content/uploads/2022/09/Teclado-Mecanico-Gamer-Razer-Blackwidow-Green-Switch-Windows.jpg',
      name: 'Teclado Mecânico Switch Red RGB Razer',
      description:
        'Teclado de alta performance para melhorar no desempenho em jogos. Este teclado entrega o que há de melhor em tecnologia.',
      price: 300,
      stock: 50,
      mark: 'razer',
      category: 'teclado',
      amount: 1,
    },
    {
      id: 3,
      img: 'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/eoradqxi/file.png',
      name: 'Teclado Mecânico LED Red Switch Brown Redragon',
      description:
        'O novo teclado da Redragon é sensacional. Bonito, leve e com um preço acessível, oferece ao usuário uma excelente experiência de uso.',
      price: 150,
      stock: 10,
      mark: 'redragon',
      category: 'teclado',
      amount: 1,
    },
    {
      id: 4,
      img: 'https://img.terabyteshop.com.br/produto/g/mouse-redragon-gamer-cobra-chroma-m711-7-botoes-programaveis-10000-dpi-rgb-preto_47021.jpg',
      name: 'Mouse Gamer Redragon',
      description:
        'O mouse XYZ001 é uma ótima opção para quem quer bom custo benefício e performance. Com este mouse é possível ter vantagem contra os demais jogadores em qualquer game.',
      price: 99,
      stock: 2,
      mark: 'redragon',
      category: 'mouse',
      amount: 1,
    },
    {
      id: 5,
      img: 'https://i.zst.com.br/thumbs/12/31/3a/1730615274.jpg',
      name: 'Mouse Pro 1ms Razer',
      description:
        'O mouse pro da Razer é o queridinho do CS:GO. 6000dpi, 1ms, eita... É qualidade que não acaba mais! É possível inserir uma memória RAM para melhorar a memória da mira de sniper.',
      price: 120,
      stock: 14,
      mark: 'razer',
      category: 'mouse',
      amount: 1,
    },
    {
      id: 6,
      img: 'https://images-americanas.b2w.io/produtos/104174897/imagens/placa-de-video-pcyes-nvidia-geforce-gtx-1050-ti-4gb-128-bits-dual-fan/104174895_1_large.jpg',
      name: 'Placa de vídeo AMD UmDoisTrês456 8KB de VRAM',
      description:
        'A placa de vídeo lançamento mundial! Tem conquistado diversos gamers por causa do seu alto desempenho que carrega na sua carcaça. Vale à pena levar a sua!',
      price: 3500,
      stock: 100,
      mark: 'amd',
      category: 'placa de vídeo',
      amount: 1,
    },
    {
      id: 7,
      img: 'https://a-static.mlcdn.com.br/800x560/placa-de-video-pcyes-geforce-gt-710-2gb-ddr3-64-bits-hdmi-vga-dvi-pa710gt6402d3lp/elcatech/5214a6f2b8ff11eb8fa34201ac18500e/fa86a7d8d1deebcfb653baa5a7d4ac72.jpeg',
      name: 'Placa de vídeo AMD 40028922',
      description:
        'Com 1 min de tempo de resposta, 10 MB de VRAM e um processador super atual Intel Pentium 1a geração, possibilita altíssima performance para jogar Mario Kart 1999. ',
      price: 5000,
      stock: 20,
      mark: 'amd',
      category: 'placa de vídeo',
      amount: 1,
    },
    {
      id: 8,
      img: 'https://a-static.mlcdn.com.br/800x560/placa-de-video-pny-nvidia-quadro-p400-2gb-gddr5/rafaelcorrea/63c2d6eae5c111ec85ef4201ac185078/f2b5cf98ac27d8041dad29cd5e548bbf.jpeg',
      name: 'Placa de vídeo Nvidia Quadro P400 2Gb Gddr5',
      description:
        'A NVIDIA Quadro P400 é equipada com uma GPU da arquitetura Pascal contendo 256 núcleos CUDA. ',
      price: 699.99,
      stock: 96,
      mark: 'nvidia',
      category: 'placa de vídeo',
      amount: 1,
    },
    {
      id: 9,
      img: 'https://images.samsung.com/is/image/samsung/br-ur55-lu28r550uqlmzd-frontblack-258478472?$650_519_PNG$',
      name: 'Monitor de plasma Samsung',
      description:
        'Alta performance, última geração e um borrão na tela após 1 hora de uso. O monitor X-C4B0QU1NH0 é a opção certa para trabalhos em escritório e jogatinas diárias.',
      price: 1500,
      stock: 200,
      mark: 'samsung',
      category: 'monitor',
      amount: 1,
    },
    {
      id: 10,
      img: 'https://images.tcdn.com.br/img/img_prod/959947/monitor_led_21_5_acer_v226hql_hdmi_dvi_vga_1196_1_afc7ba79a07d3bbd9aa588f22271886a.jpg',
      name: 'Monitor Gamer 1ms 4K 8K 12K',
      description:
        'Pesando 1 arroba e com tempo de resposta quase que num piscar de olhos, o monitor conta com suporte para TV à cabo, principalmente SKY e NET, entrada para vídeo cassette e muitos mais.',
      price: 2500,
      stock: 500,
      mark: 'acer',
      category: 'monitor',
      amount: 1,
    },
    {
      id: 11,
      img: 'https://images.tcdn.com.br/img/img_prod/740836/monitor_acer_v226hql_21_5_full_hd_led_hdmi_vga_dvi_vesa_ajuste_de_inclinacao_4203_1_53d12da00c1e60f53335a8fdce56b84e.jpg',
      name: `Monitor 14" LED Acer I-560`,
      description:
        'Fabricado no Terminal 5 de Manaus, polo industrial, o monitor I-560 vem com alarme anti-roubo. É só apertar para ligar que a polícia é acionada para socorrer o cidadão.',
      price: 4500,
      stock: 0,
      mark: 'acer',
      category: 'monitor',
      amount: 1,
    },
  ])

  const [cartItems, setCartItems] = useState<ICardItem[]>([])

  const [showCart, setShowCart] = useState<boolean>(false)

  const [filter, setFilter] = useState<string>('')

  const [search, setSearch] = useState<string>('')

  const [isBiggerCard, setIsBiggerCard] = useState<boolean>(false)

  const [showPayment, setShowPayment] = useState<boolean>(false)

  const addProductCart = (id: number, img: string, name: string, price: number, amount: number) => {
    const copyCartItems = [...cartItems]

    const item = copyCartItems.find((product) => product.id === id)

    if (!item) {
      copyCartItems.push({id, img, name, price, amount})
    } else {
      item.amount = item.amount + 1
    }

    setCartItems(copyCartItems)
  }

  const removeProductCart = (id: number) => {
    const copyCartItems = [...cartItems]
  
    const item = copyCartItems.find((product) => product.id === id)

    const index = copyCartItems.findIndex((product) => product.id === id)
    
    if (item!.amount >= 2) {
      item!.amount = item!.amount - 1
    } else {
      copyCartItems.splice(index, 1)
      toast('Produto removido do carrinho', {icon: '⚠️'})
    }

    setCartItems(copyCartItems)
  }

  const clearCart = () => setCartItems([])

  const total = () => {
    const total = []

    for (let i = 0; i < cartItems.length; i++) {
      const value = cartItems[i].amount * cartItems[i].price
      total.push(value)
    }

    return total.reduce((prev, cur) => prev + cur, 0)
  }

  return (
    <Context.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        filter,
        setFilter,
        search,
        setSearch,
        isBiggerCard,
        setIsBiggerCard,
        addProductCart,
        removeProductCart,
        clearCart,
        showPayment,
        setShowPayment,
        total
      }}
    >
      {children}
    </Context.Provider>
  )
}
