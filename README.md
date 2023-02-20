# clothing-api

Public api with thousands of clothing items.

### run this locally

dev: `npm run dev`

hosted on `http://localhost:3000/`

## routes

hosted on `https://api.indut.net/`

### sample link

```javascript
`https://api.indut.net/${category}?sort=&offset=0&limit=0`;
```

### categories

- Shirts
- Jackets
- Sweathirts
- Pants
- Shorts
- Shoes
- Accessories

## parameters

### sort

- default - a-z asc
- popular (should I record calls to invidual items)
- a-z asc
- a-z desc

### offset

will offset results by given amount

### limit

limit to how many results are fetched, max 50.
