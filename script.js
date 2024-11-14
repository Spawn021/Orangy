const productsData = {
  Seating: [
    {
      id: 1,
      category: "SOFA",
      name: "Oda ottoman",
      price: "$699.00",
      image:
        "https://s3-alpha-sig.figma.com/img/8ab6/1f82/c453b13b9886a02723b96aa98d48e9f9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewYAPcZaHiDsdBTKrsLUAX0eJGz0oTCTM2LIxuz8Rgdx8LaG3AcBzz8E4Ri2sYZ3o8OxVGC2c66XuzmEheW6SqfIL875SQ29NCxotcPgFl0JMy5DmSY2qf50gOP23DiZLSOChtiPjNXEZ3KBZg-9BnQKnrG34GTyrrpACBeZsv3ynebR7L41-ZiymG4XmnUixHaCBh4Qo4yqXLfSI5VDX~O9S6Xvg9fOFL6v4IbIk8ujozLkUy2aiY~iM8auIGmL20W7~JM840Vfvo19unUyA7Z6uu4L8B7sJZ7kiHvjiPhllGUvwLeqM3CbPUw7EDt-gNDFmHd7zHmCHO~WH06kdg__",
    },
    {
      id: 2,
      category: "Dining Chair",
      name: "Ready dining chair",
      price: "$699.00",
      labels: ["Selling fast", "New"],
      image:
        "https://s3-alpha-sig.figma.com/img/add2/5932/a5a0486c510af81790b481fe2de4bf85?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YenRszt~Q5ajwpXkcyVllobGDI-pz-EG7uiJYk4UfecFR8rxJ0I9~c6XnvTk5fN5rvGbGwdKpQzYVhobRLr8euFJb0kTewIydugf9D65J3lFkhOheQoWUfpR3RGWDS83Sx9d6YWLYADqqPg~ZgdV~FlZ-tRrN32pXmWmXFXR5QNNzcmnmQPUMd3UIAqZ2~HohDa1TUeZx2yV152zmGMRSjRyMdhNIECA896Bet1cIOlB0sIFY70q-r-UNEWufwRGHb48qr26M9QRL4KLQvu1Bi5048frrGA-eRs3Tu0ZjK6vNklECJK1gatQvQG6N4beuDqWeVIXiceWh2sWHqmjeA__",
    },
    {
      id: 3,
      category: "Dining Chair",
      name: "Harbour side dining chair",
      price: "$699.00",
      image:
        "https://s3-alpha-sig.figma.com/img/9516/e8a7/3a164e69298517ad1141b0bdc8518de3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBDPzj75HZlItMqCfPB4eld6EWKxuN9TI-0bNc4lVHHGO11ae73tHKGFIkNa7aR77kMfG3Z3uUhIwrbvYCehW9xj3ICb7MlT21~EF-tpNPsKRu3POqw2ApQbK9UTi~M~P-DCoMAe6nGgjhM1tRZ89eWRbjhzu--2ig71tawwxGbSvJLkvwINHil6mvoA0HKvenuIOVLdLihpWXj15Dk3gHaJ6itj80y7rk-mqr5iCh9ZndEvFfw0HVPNjiAevaWX4dJSvG1joCklati1AeF8f1y8AKdw9ZP77x0K503LejICpg78jzAQP9f~zak7a3E9hXcG7~Pu3l~oSmb8VM21HQ__",
    },
    {
      id: 4,
      category: "SOFA",
      labels: ["-30%"],
      name: "Tearoom club chair",
      priceOld: "$699.00",
      priceNew: "$999.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },

    {
      id: 5,
      category: "Dining Chair",
      name: "OCo dining chair",
      price: "$1,199.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },
    {
      id: 6,
      category: "SOFA",
      name: "Knitting lounge chair",
      price: "$990.00",
      image:
        "https://s3-alpha-sig.figma.com/img/b925/3846/db8fecee147b5f8112466a3b04341698?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QBqSlcgOhCqDeNA1JVmMGt0vseaGe~kVOhG1DlJKrY2jtaBdiCSMb4HP8mgzvV~TPrl-V4rDp4P0GrNf72Tr6S4wPjvuXc2VGRXg4DTkguoYO2kJkz-u5EcRz~vls-IVZzUnp4Wg8N5s~7UmqXQmPD3IlV4YhXOwMC-8mWWxho3QXxOAz2oxSj9SaQgvnDciSSi6CIMJrwlMKLydP5~vR6uEf1l-M--juNs9wxTE8Z3atP7TSjl0dMkUQWQ5Z7Dgwc65nlFMl4YFjSNL5Om2CVMo6Yyeq6Ii9VJ5Dd~4ETuCVqODgEUApZgAVXqNea91lYqn1mgk6m9R~8eHIT8S3Q__",
    },
  ],
  Table: [
    {
      id: 1,
      category: "Table",
      name: "Blanco Table",
      price: "$999.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/blancotable_01-530x530.jpg",
    },
    {
      id: 2,
      category: "Dining Table",
      name: "Antinomia Dining Table",
      price: "$699.00",
      labels: ["Selling fast"],
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/antinomiadiningtable_f-530x530.jpg",
    },
    {
      id: 3,
      category: "Table",
      name: "Up Down Coffee & Side Table",
      price: "$699.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/updowncoffeesidetable_f-530x530.jpg",
    },
    {
      id: 4,
      category: "Table",
      labels: ["-40%"],
      name: "Adri Coffee & Side Tables",
      priceOld: "$599.00",
      priceNew: "$999.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/adricoffeesidetables_f-530x530.jpg",
    },

    {
      id: 5,
      category: "Table",
      name: "Antinomia Dining Table",
      price: "$1,199.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/antinomiadiningtable_f.jpg",
    },
    {
      id: 6,
      category: "SOFA",
      name: "Knitting Table",
      price: "$990.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/adricoffeesidetables_02-530x360.jpg",
    },
  ],
  Storage: [
    {
      id: 1,
      category: "BEDS",
      name: "Jill Bed With Storage",
      price: "$1,299.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2019/05/jill-bed-storage_02.jpg",
    },
    {
      id: 2,
      category: "Storage",
      name: "Sami Shelving/Storage",
      price: "$699.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2016/02/sami-shelving-storage_f.jpg",
    },
    {
      id: 3,
      category: "Dining Chair",
      name: "Harbour side dining chair",
      price: "$699.00",
      image:
        "https://s3-alpha-sig.figma.com/img/9516/e8a7/3a164e69298517ad1141b0bdc8518de3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBDPzj75HZlItMqCfPB4eld6EWKxuN9TI-0bNc4lVHHGO11ae73tHKGFIkNa7aR77kMfG3Z3uUhIwrbvYCehW9xj3ICb7MlT21~EF-tpNPsKRu3POqw2ApQbK9UTi~M~P-DCoMAe6nGgjhM1tRZ89eWRbjhzu--2ig71tawwxGbSvJLkvwINHil6mvoA0HKvenuIOVLdLihpWXj15Dk3gHaJ6itj80y7rk-mqr5iCh9ZndEvFfw0HVPNjiAevaWX4dJSvG1joCklati1AeF8f1y8AKdw9ZP77x0K503LejICpg78jzAQP9f~zak7a3E9hXcG7~Pu3l~oSmb8VM21HQ__",
    },
    {
      id: 4,
      category: "SOFA",
      labels: ["-30%"],
      name: "Tearoom club chair",
      priceOld: "$699.00",
      priceNew: "$999.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },

    {
      id: 5,
      category: "Dining Chair",
      name: "OCo dining chair",
      price: "$1,199.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },
    {
      id: 6,
      category: "SOFA",
      name: "Knitting lounge chair",
      price: "$990.00",
      image:
        "https://s3-alpha-sig.figma.com/img/b925/3846/db8fecee147b5f8112466a3b04341698?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QBqSlcgOhCqDeNA1JVmMGt0vseaGe~kVOhG1DlJKrY2jtaBdiCSMb4HP8mgzvV~TPrl-V4rDp4P0GrNf72Tr6S4wPjvuXc2VGRXg4DTkguoYO2kJkz-u5EcRz~vls-IVZzUnp4Wg8N5s~7UmqXQmPD3IlV4YhXOwMC-8mWWxho3QXxOAz2oxSj9SaQgvnDciSSi6CIMJrwlMKLydP5~vR6uEf1l-M--juNs9wxTE8Z3atP7TSjl0dMkUQWQ5Z7Dgwc65nlFMl4YFjSNL5Om2CVMo6Yyeq6Ii9VJ5Dd~4ETuCVqODgEUApZgAVXqNea91lYqn1mgk6m9R~8eHIT8S3Q__",
    },
  ],
  Lighting: [
    {
      id: 1,
      category: "Lighting",
      name: "Collier Suspension Light",
      price: "$699.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/colliersuspensionlight_f-530x530.jpg",
    },
    {
      id: 2,
      category: "Dining Chair",
      name: "Ready dining chair",
      price: "$699.00",
      labels: ["Selling fast", "New"],
      image:
        "https://s3-alpha-sig.figma.com/img/add2/5932/a5a0486c510af81790b481fe2de4bf85?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YenRszt~Q5ajwpXkcyVllobGDI-pz-EG7uiJYk4UfecFR8rxJ0I9~c6XnvTk5fN5rvGbGwdKpQzYVhobRLr8euFJb0kTewIydugf9D65J3lFkhOheQoWUfpR3RGWDS83Sx9d6YWLYADqqPg~ZgdV~FlZ-tRrN32pXmWmXFXR5QNNzcmnmQPUMd3UIAqZ2~HohDa1TUeZx2yV152zmGMRSjRyMdhNIECA896Bet1cIOlB0sIFY70q-r-UNEWufwRGHb48qr26M9QRL4KLQvu1Bi5048frrGA-eRs3Tu0ZjK6vNklECJK1gatQvQG6N4beuDqWeVIXiceWh2sWHqmjeA__",
    },
    {
      id: 3,
      category: "Dining Chair",
      name: "Harbour side dining chair",
      price: "$699.00",
      image:
        "https://s3-alpha-sig.figma.com/img/9516/e8a7/3a164e69298517ad1141b0bdc8518de3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBDPzj75HZlItMqCfPB4eld6EWKxuN9TI-0bNc4lVHHGO11ae73tHKGFIkNa7aR77kMfG3Z3uUhIwrbvYCehW9xj3ICb7MlT21~EF-tpNPsKRu3POqw2ApQbK9UTi~M~P-DCoMAe6nGgjhM1tRZ89eWRbjhzu--2ig71tawwxGbSvJLkvwINHil6mvoA0HKvenuIOVLdLihpWXj15Dk3gHaJ6itj80y7rk-mqr5iCh9ZndEvFfw0HVPNjiAevaWX4dJSvG1joCklati1AeF8f1y8AKdw9ZP77x0K503LejICpg78jzAQP9f~zak7a3E9hXcG7~Pu3l~oSmb8VM21HQ__",
    },
    {
      id: 4,
      category: "SOFA",
      labels: ["-30%"],
      name: "Tearoom club chair",
      priceOld: "$699.00",
      priceNew: "$999.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },

    {
      id: 5,
      category: "Dining Chair",
      name: "OCo dining chair",
      price: "$1,199.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },
    {
      id: 6,
      category: "SOFA",
      name: "Knitting lounge chair",
      price: "$990.00",
      image:
        "https://s3-alpha-sig.figma.com/img/b925/3846/db8fecee147b5f8112466a3b04341698?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QBqSlcgOhCqDeNA1JVmMGt0vseaGe~kVOhG1DlJKrY2jtaBdiCSMb4HP8mgzvV~TPrl-V4rDp4P0GrNf72Tr6S4wPjvuXc2VGRXg4DTkguoYO2kJkz-u5EcRz~vls-IVZzUnp4Wg8N5s~7UmqXQmPD3IlV4YhXOwMC-8mWWxho3QXxOAz2oxSj9SaQgvnDciSSi6CIMJrwlMKLydP5~vR6uEf1l-M--juNs9wxTE8Z3atP7TSjl0dMkUQWQ5Z7Dgwc65nlFMl4YFjSNL5Om2CVMo6Yyeq6Ii9VJ5Dd~4ETuCVqODgEUApZgAVXqNea91lYqn1mgk6m9R~8eHIT8S3Q__",
    },
  ],
  Decor: [
    {
      id: 1,
      category: "Decor",
      name: "Silex Mirror",
      price: "$699.00",
      image:
        "https://propertyfurniture.com/wp-content/uploads/2024/09/silexmirror_f-530x530.jpg",
    },
    {
      id: 2,
      category: "Dining Chair",
      name: "Ready dining chair",
      price: "$699.00",
      labels: ["Selling fast", "New"],
      image:
        "https://s3-alpha-sig.figma.com/img/add2/5932/a5a0486c510af81790b481fe2de4bf85?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YenRszt~Q5ajwpXkcyVllobGDI-pz-EG7uiJYk4UfecFR8rxJ0I9~c6XnvTk5fN5rvGbGwdKpQzYVhobRLr8euFJb0kTewIydugf9D65J3lFkhOheQoWUfpR3RGWDS83Sx9d6YWLYADqqPg~ZgdV~FlZ-tRrN32pXmWmXFXR5QNNzcmnmQPUMd3UIAqZ2~HohDa1TUeZx2yV152zmGMRSjRyMdhNIECA896Bet1cIOlB0sIFY70q-r-UNEWufwRGHb48qr26M9QRL4KLQvu1Bi5048frrGA-eRs3Tu0ZjK6vNklECJK1gatQvQG6N4beuDqWeVIXiceWh2sWHqmjeA__",
    },
    {
      id: 3,
      category: "Dining Chair",
      name: "Harbour side dining chair",
      price: "$699.00",
      image:
        "https://s3-alpha-sig.figma.com/img/9516/e8a7/3a164e69298517ad1141b0bdc8518de3?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TBDPzj75HZlItMqCfPB4eld6EWKxuN9TI-0bNc4lVHHGO11ae73tHKGFIkNa7aR77kMfG3Z3uUhIwrbvYCehW9xj3ICb7MlT21~EF-tpNPsKRu3POqw2ApQbK9UTi~M~P-DCoMAe6nGgjhM1tRZ89eWRbjhzu--2ig71tawwxGbSvJLkvwINHil6mvoA0HKvenuIOVLdLihpWXj15Dk3gHaJ6itj80y7rk-mqr5iCh9ZndEvFfw0HVPNjiAevaWX4dJSvG1joCklati1AeF8f1y8AKdw9ZP77x0K503LejICpg78jzAQP9f~zak7a3E9hXcG7~Pu3l~oSmb8VM21HQ__",
    },
    {
      id: 4,
      category: "SOFA",
      labels: ["-30%"],
      name: "Tearoom club chair",
      priceOld: "$699.00",
      priceNew: "$999.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },

    {
      id: 5,
      category: "Dining Chair",
      name: "OCo dining chair",
      price: "$1,199.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6e6f/29f0/7eb6685cad6008a3f0c2c831120ff449?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jZz7ZCRxxztLVLuFTMJnSNt6Z5OP4UXZ5zQ~ghbV~ezLIfIyTC0bipniWxucwbgyJtvZMuYKNV7muK94T44ASTsDZL8SUesWuiCNWGuXKWGlffJ56GtUi2GjOwDem8krZm1pFy-15kHvJYAvB-dPffE-HQidr8fC9cpiJQJfPMHBE4cNuzjWDuQMflH0RHZBCm291xUzcVpHUYXO0eKmZcNjFpQOw4eprSb70Vhs0XJ7QnDJ2-LzqqU42udiHioWie1vhj1t7cEJpqh7teB0vXaFYG6OsUbqFnhHGfPv4wnW2XSKq0Glns5nm-zvpQEfpeWfTZyETqxwQrjZbHgrrw__",
    },
    {
      id: 6,
      category: "SOFA",
      name: "Knitting lounge chair",
      price: "$990.00",
      image:
        "https://s3-alpha-sig.figma.com/img/b925/3846/db8fecee147b5f8112466a3b04341698?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QBqSlcgOhCqDeNA1JVmMGt0vseaGe~kVOhG1DlJKrY2jtaBdiCSMb4HP8mgzvV~TPrl-V4rDp4P0GrNf72Tr6S4wPjvuXc2VGRXg4DTkguoYO2kJkz-u5EcRz~vls-IVZzUnp4Wg8N5s~7UmqXQmPD3IlV4YhXOwMC-8mWWxho3QXxOAz2oxSj9SaQgvnDciSSi6CIMJrwlMKLydP5~vR6uEf1l-M--juNs9wxTE8Z3atP7TSjl0dMkUQWQ5Z7Dgwc65nlFMl4YFjSNL5Om2CVMo6Yyeq6Ii9VJ5Dd~4ETuCVqODgEUApZgAVXqNea91lYqn1mgk6m9R~8eHIT8S3Q__",
    },
  ],
};

const productGrid = document.getElementById("productGrid");
function renderProducts(category) {
  const products = productsData[category];
  productGrid.innerHTML = products
    .map(
      (product, index) =>
        `<div class="product__grid-item product__grid-item--${index + 1}">
                <div class="product__info">
                  <div class="product__image">
                    <img src="${product.image}"alt="product"/>
                  </div>
                  ${
                    product.labels?.includes("Selling fast")
                      ? `<div class="product__label product__label--fast">Selling fast!</div>`
                      : ""
                  }
                  ${
                    product.labels?.includes("New")
                      ? `<div class="product__label product__label--new">New</div>`
                      : ""
                  }
                  ${
                    product.labels?.includes("-30%")
                      ? `<div class="product__label product__label--discount">New</div>`
                      : ""
                  }
                  <div class="product__category">${product.category}</div>
                  <div class="product__name">${product.name}</div>
                  <div class="product__price">
                    ${
                      product.price
                        ? `<div class="product__price">${product?.price}</div>`
                        : ""
                    }
                    ${
                      product.priceNew
                        ? `<div class="product__price--new">${product?.priceNew}</div>`
                        : ""
                    }
                    ${
                      product.priceOld
                        ? `<div class="product__price--old">${product?.priceOld}</div>`
                        : ""
                    }
                  </div>
                </div>
            </div>
            `
    )
    .join("");
}
const tabs = document.querySelectorAll(".product__tab-item");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.add("product__tab-item--active");
    tabs.forEach((item) => {
      if (item !== tab) {
        item.classList.remove("product__tab-item--active");
      }
    });
    const category = tab.getAttribute("data-tab");
    renderProducts(category);
  });
});
renderProducts("Seating");

// Splide
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    type: "loop",
    perPage: 4,
    autoplay: true,
    interval: 3000,
    pagination: false,
    arrows: false,
  }).mount();
  if (window.innerWidth < 479) {
    new Splide(".splide", {
      type: "loop",
      perPage: 1,
      autoplay: true,
      interval: 3000,
      pagination: false,
      arrows: false,
      padding: {
        right: "30%",
      },
    }).mount();
  }
});
// scroll smooth to product section
document.querySelector(".banner__btn").addEventListener("click", () => {
  const productSection = document.querySelector(".product");
  productSection.scrollIntoView({ behavior: "smooth" });
});

// Mobile Info Slide at header
const infoItems = document.querySelectorAll(".header__info-item");
const backBtn = document.querySelector(".header__info-back");
const nextBtn = document.querySelector(".header__info-next");

let currentIndex = 0;

function displayMobile() {
  const isMobile = window.innerWidth < 479;

  infoItems.forEach((item, index) => {
    if (isMobile) {
      item.style.display = index === currentIndex ? "block" : "none";
    } else {
      item.style.display = "block";
    }
  });
}
backBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + infoItems.length) % infoItems.length;
  displayMobile();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % infoItems.length;
  displayMobile();
});
window.addEventListener("resize", displayMobile);

// Horizontal Scroll with Drag
const container = document.querySelector(".inspiration__box");

let isDown = false;
let startX; // the position of the cursor when mousedown is triggered
let scrollLeft; // the amount of scroll from the left of the container to current position

container.addEventListener("mousedown", (e) => {
  // pageX calculated from the left of the document to the cursor
  // offsetLeft calculated from the left of the parent element, in this case, it is inspiration. I am set the width of the inspiration to 100% so it is the same as the document

  // console.log(e.pageX, container, container.offsetLeft, container.scrollLeft);
  isDown = true;
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  // mouseleave is triggered when the mouse leaves the container
  isDown = false;
});

container.addEventListener("mouseup", () => {
  // mouseup is triggered when the user releases the mouse after mousedown
  isDown = false;
});

container.addEventListener("mousemove", (e) => {
  // mousemove is triggered when the user moves the mouse over the container
  if (!isDown) return;
  e.preventDefault(); // prevent the default behavior of the mousemove event
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 3; // the speed of the scroll
  container.scrollLeft = scrollLeft - walk;
});
