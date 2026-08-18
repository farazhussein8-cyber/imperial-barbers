# Imperial Barbers — website

A one-page site for Imperial Barbers, 264 Great South Road, Papatoetoe, Auckland.

## Files

```
index.html          the whole page
css/styles.css      all styling
js/main.js          header, mobile menu, scroll reveals
images/             logo mark, favicon and the five shop photos
```

No build step and no dependencies. Open `index.html` in a browser, or upload the
whole folder to any host (Netlify, Cloudflare Pages, GitHub Pages, cPanel).

## Replacing the photos

The photos currently in `images/` came from the versions pasted into chat, which
are about 680px wide. They hold up on a phone and look fine on desktop behind the
dark hero wash, but the originals off the camera will look sharper.

To swap them in, save the full-size files over these names — keep the names and
the shapes and nothing else needs changing:

| File                   | Shape          | Used for                        |
| ---------------------- | -------------- | ------------------------------- |
| `shop-wide.jpg`        | landscape 16:9 | gallery                         |
| `shop-wide-1100.jpg`   | landscape 16:9 | hero at mid widths (generated)  |
| `shop-wide-1700.jpg`   | landscape 16:9 | hero at desktop (generated)     |
| `shop-mirrors.jpg`     | landscape 4:3  | "Room to sit back" + gallery    |
| `shop-mirrors-1360.jpg`| landscape 4:3  | the same, on 2x screens (gen.)  |
| `shop-interior.jpg`    | landscape 16:9 | gallery                         |
| `shop-interior-1360.jpg`| landscape 16:9| the same, on 2x screens (gen.)  |
| `shop-reception.jpg`   | portrait 3:4   | Visit section + gallery         |
| `shop-reception-764.jpg`| portrait 3:4  | the same, on 2x screens (gen.)  |
| `shop-chairs.jpg`      | portrait 3:4   | hero photo + gallery            |
| `shop-chairs-1600.jpg` | portrait 3:4   | hero on 2x screens (generated)  |
| `shop-chairs-764.jpg`  | portrait 3:4   | the same, on 2x screens (gen.)  |
| `logo-mark.png`        | square, circle | header, footer                  |
| `logo-hero.png`        | square, circle | the hero mark (720px)           |
| `logo-hero-480.png`    | square, circle | the same, smaller screens       |

If a replacement has a noticeably different shape, update the matching
`style="--ar:…"` on its gallery `<figure>` in `index.html` — that number is just
width ÷ height.

## Opening hours

Monday to Friday 9am–7pm, Saturday and Sunday 9am–6pm. They appear in three
places, so change all three together:

1. The hours card in the Visit section (`<dl class="hours__list">` in
   `index.html`) — the full seven-day list.
2. The footer summary line (`class="footer__hours"`).
3. `Open 7 days` in the bar under the hero, if the shop stops opening daily.

Today's row is highlighted automatically. The day is read off Auckland's clock
rather than the visitor's, so someone browsing from overseas still sees the
shop's day marked.

### The generated 2x sizes

Every file with a size in its name is upsampled from the small original with
bicubic resampling and an unsharp mask, then offered through a `srcset`. A 1x
screen still gets the small original wherever it is large enough; only 2x
screens pull the bigger file. That makes the edges hold together instead of going
This keeps edges from going mushy when the browser stretches a small file, but
it cannot invent detail that was never captured. Replacing each original and
regenerating the variants is the only real fix.

## Ratings and reviews

The 4.5 rating and the count of 47 reviews are hard-coded in two places:
the bar under the hero and the Reviews section. They are the real Google
figures as at August 2026, but they do not update themselves—when the count
moves, search `index.html` for `4.5` and `47` and change both.

The six quotes in the Reviews section are real Google reviews, reproduced
word for word including their original spelling. They were chosen from the
positive ones; the shop also has one-star reviews, and the section links
straight to the full unedited list rather than hiding that. Nothing on the
page invents a customer, a barber, a price or a review.

To change the quotes, edit the `.quote-card` figures in `index.html`. Keep
them verbatim.

## The hero

The hero is an off-centre split: copy on the left with a small logo mark
above it, and `shop-chairs.jpg` on the right running past the shell to the
window edge above 1332px. It stacks to a single column below 900px.

The logo there is `logo-hero.png`, the same artwork as `logo-mark.png`
regenerated larger from the original.

## Booking

There is no online booking system wired up. Every "Call to Book" button and
every row of the services board dials `tel:+64222444473`, and the copy says
call or walk in rather than book online.

An earlier version pointed at `imperialbarbers.setmore.com`. That account is
not this shop's — it carries no address and its timezone is set to
America/New_York — so it was removed to stop sending customers elsewhere.

To wire up a real booking system, replace `tel:+64222444473` with the booking
URL on these elements in `index.html`, and change the labels back from "Call
to Book" to "Book":

- `.nav-book` and `.header-book` in the header
- the first `.btn--brass` in the hero
- all 14 `.board__row a` links, whose `.board__cue` reads "Call"
- the `.btn--brass` in the Visit section
- `.mobile-cta__btn--book` in the sticky mobile bar
- the footer nav link

Also revisit the two meta descriptions in `<head>` and the three lines of
prose that currently say to call: the services note, the Visit note, and the
second paragraph of "Room to sit back".

## Things deliberately left out

No prices anywhere on the page, since those were not supplied.

## Links used

- Instagram: <https://www.instagram.com/imperialbarbersnz/>
- Phone: `tel:+64222444473` (022 244 4473)
- Email: `imperialstylesnz@gmail.com`
- Directions: Google Maps, destination 264 Great South Road, Papatoetoe

To change any of these, search `index.html` for the value — the phone number
appears on every service row as well as the header, hero, Visit section,
footer and the sticky mobile bar.
