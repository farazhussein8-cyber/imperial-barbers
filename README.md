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
| `shop-wide.jpg`        | landscape 16:9 | hero background + gallery       |
| `shop-wide-1100.jpg`   | landscape 16:9 | hero at mid widths (generated)  |
| `shop-wide-1700.jpg`   | landscape 16:9 | hero at desktop (generated)     |
| `shop-mirrors.jpg`     | landscape 4:3  | "Room to sit back" + gallery    |
| `shop-interior.jpg`    | landscape 16:9 | gallery                         |
| `shop-reception.jpg`   | portrait 3:4   | Visit section + gallery         |
| `shop-chairs.jpg`      | portrait 3:4   | gallery                         |
| `logo-mark.png`        | square, circle | header, footer                  |

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

### The two generated hero sizes

`shop-wide-1100.jpg` and `shop-wide-1700.jpg` are upsampled from the 680px
original with bicubic resampling and an unsharp mask, then wired up as a
`srcset` on the hero. That makes the edges hold together instead of going
mushy when the browser stretches a 680px file across a desktop screen, but it
cannot invent detail that was never captured. Replacing `shop-wide.jpg` with
the camera original and regenerating these two is the only real fix.

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
