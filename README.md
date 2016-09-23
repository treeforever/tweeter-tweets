# Tweeter Project

A simple single-page AJAX-based Twitter clone that uses jQuery, HTML5 and plain ol' CSS3 to help web bootcamp students get comfortable with their front-end chops with those technologies.

## App functionality

* Single page app architecture.
* Use ajax to communicate w/ Tweeter backend server

Page Contains:

- Navbar

  - fixed to top
  - contains Compose button, which:
     - Toggles display of inline compose box
     - Auto-focuses the textarea in the compose box

- Tweet compose box
  - Contains form to submit tweet, above the tweets
  - Form contains:
      - validates input on submit
        + Indicates input errors
      - Character counter updates on keypress
        - Turn red (or similar) when count > 140 chars
      - Does not submit (alert feedback) if empty or count > 140
        + should be smart enough to catch empty spaces (" ") as text [minor]
      - refreshes tweet list when successfully submitted

- List of tweets

  - Order by post time descending (reverse chronological)


## Final Product

!["End Result"](https://d.pr/i/1eyEY/4MEH16BY+)

## Dependencies & Troubleshooting

Dependencies:

- MongoDB
- Express
- Node 5.10.x or above
