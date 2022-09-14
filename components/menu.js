import * as Icon from 'react-feather'
const Menuitem = [
  {
    "name": "Dashboard",
    "url": "/dashboard",
    'icon': <Icon.List />
  },
  {
    "name": "Data Master",
    "url": "/item1",
    "icon": <Icon.ArrowUp />,

    "children": [
      {
        "name": "Barang",
        "url": "/barang",
        "icon": <Icon.AlignCenter />

      },
      {
        "name": "Jenis Barang",
        "url": "/jenis",
        "icon": <Icon.Award />

      },
      {
        "name": "Kategori Barang",
        "url": "/kategori",
        "icon": <Icon.Check />

      },
      {
        "name": "Child12",
        "url": "/child13",
        "icon": <Icon.List />

      }
    ]
  },
  {
    "name": "Barang",
    "icon": <Icon.Columns />,

    "children": [
      {
        "name": "Child31",
        "url": "/child31",
        "icon": <Icon.List />,

      },
      {
        "name": "Child32",
        "url": "/child32",
        "icon": <Icon.List />,

      },
      {
        "name": "Child33",
        "url": "/child33",
        "icon": <Icon.List />,

      }
    ]
  },
  {
    "name": "Item4",
    "icon": <Icon.Folder />,
    "children": [
      {
        "name": "Child41",
        "url": "/child41",
        "icon": <Icon.List />,

      },
      {
        "name": "Child42",
        "url": "/child42",
        "icon": <Icon.List />,


      },
      {
        "name": "Child43",
        "url": "/child42",
        "icon": <Icon.List />,

      }
    ]
  },
  {
    "name": "Group Penjualan",
    "url": "/dashboard",
    'icon': '',
    'group': true,
  },


  {
    "name": "Penjualan",
    "icon": <Icon.ShoppingBag />,
    "children": [
      {
        "name": "Transaksi",
        "url": "/penjualan",
        "icon": <Icon.List />,

      },
      {
        "name": "Return Barang",
        "url": "/return",
        "icon": <Icon.Type />,
      },
      {
        "name": "Child43",
        "url": "/child42",
        "icon": <Icon.List />,

      }
    ]
  },
  {
    "name": "Group Report",
    "url": "/dashboard",
    'icon': '',
    'group': true,
  }, 
  {
    "name": "Laporan",
    "icon": <Icon.PenTool />,
    "children": [
      {
        "name": "Transaksi",
        "url": "/penjualan",
        "icon": <Icon.List />,

      },
      {
        "name": "Return Barang",
        "url": "/return",
        "icon": <Icon.List />,


      },
      {
        "name": "Child43",
        "url": "/child42",
        "icon": <Icon.List />,

      }
    ]
  }

]

export default Menuitem