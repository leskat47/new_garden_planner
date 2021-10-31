Plant.create(name: 'Geranium Vine, Purple', exposure:'sun to shade', moisture:"keep moist", description:"perennial")
az = Plant.create(name: 'Azalea', exposure:'sun', moisture:"keep moist", description:"perennial")
Plant.create(name: 'Lemon Verbena', exposure:'sun', moisture:"keep moist", description:"perennial")

area = Area.create(name: 'main garden')
loc = Location.create(name: 'southeast flowerbed', area: area)

Planting.create(date_planted: '2019-03-03', description: 'perennial', plant: az)


