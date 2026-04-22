# Scott Duncan site: update brief

This supersedes the earlier brief in key respects. Read both together, but where they conflict, this one wins.

## What has changed

Earlier thinking positioned Experience Economics as the primary identifier for the practice, with the site organized around frameworks, current projects, writing, and photography as parallel sections. The thinking has evolved.

The site now sits under a single anchoring statement:

> I am an artist, a thinker, and a contributor to the institutions and communities I care about.

This sentence is the spine of the site. Three identities held together in one person. The site architecture should reflect this unity: one person, three facets, all visible at once.

## Domain and structure

Single site at **scott-duncan.ca**. This replaces the earlier direction of leading with experienceeconomics.io.

Three main sections, implemented as paths on the same domain rather than as subdomains:

- scott-duncan.ca/art
- scott-duncan.ca/thought
- scott-duncan.ca/contribution

Reasons for choosing paths over subdomains:

1. The three-identity sentence claims one person with three facets, not three separate entities. Paths express unity; subdomains express separation.
2. Shared header, footer, and visual language across the three sections reinforce that they belong to the same person.
3. The visitor who arrives at one section can see the other two are part of the same whole, without having to navigate to a different site.
4. One site is easier to build, maintain, deploy, and keep visually consistent than three.
5. The precedents Scott has studied (Himelfarb, Kahane, Gawande, Talaga) all use single sites rather than subdomain-per-identity structures.

experienceeconomics.io should redirect to scott-duncan.ca/thought/experience-economics (or similar) once the new site is live. DuncanLCD remains the invisible corporate wrapper and does not appear on the site.

## Home page

The home page carries the three-identity sentence and introduces the three sections. Keep it short.

Suggested structure:

- A short opening statement that leads with the three-identity sentence, or a light expansion of it.
- Three clear paths into the three sections, with a one-sentence descriptor for each.
- A single photograph, used substantively, not as decoration.
- A quiet footer link to the About page (which holds the essay).

No service pitch. No testimonials. No logos carousel. No "book a call" CTA. The home page is a doorway, not a pitch.

Draft opening text (Scott can adjust):

> I am an artist, a thinker, and a contributor to the institutions and communities I care about.
>
> I make photographs and write. I think and build frameworks about how institutions serve the people they exist for. And I work on current projects in Canadian health, reconciliation, and culture.
>
> Three paths into what I'm doing. Choose the one that fits why you came.

Then three links, each with a single sentence:

- **Art.** Photography, writing, and a screenplay in development.
- **Thought.** Essays, frameworks, and the theory of change behind the work.
- **Contribution.** Current projects in Canadian institutions and communities.

## The three sections

### Art (scott-duncan.ca/art)

Scott already has an art site at scott-duncan.ca. The content and structure of that existing site become the Art section of the new unified site. Photography as the primary content, with space for writing beyond the professional pieces and for the screenplay.

Short artist statement at the top, in Scott's voice. Gallery organized however Scott prefers (by project, subject, or year). No language that connects the art to the working life, other than a small footer note that links to the other sections.

### Thought (scott-duncan.ca/thought)

This is the new section that holds the intellectual contribution. It contains:

- The essay ("Why this work, why now" or whatever Scott titles it), served as the primary About document. This is the spine document. It lives on the About page and is linked from the home page and from every section.
- The three frameworks, each with its own subpage:
  - **Experience Economics.** Connects the lived experience of people served by institutions to economic reality. Answers: is the institution actually delivering what it exists to deliver, and what would the gaps cost to close?
  - **Capacity Economics.** Makes visible the real operational capacity of an institution against its stated obligations, including the trade-offs that finite resources impose. Answers: can the institution actually do what it says it will, what is it giving up in the trade-offs, and what would it take to close the gap between capacity and obligation?
  - **Alignment Economics.** Measures how stakeholders perceive a change effort against its stated intent, so leaders can see where perception is drifting from intent. Answers: is the transformation actually landing, and where? (This framework was previously called Perception ROI; the name cannot continue because of professional conflicts from Scott's PwC period.)
- Writing section. Chronological list of published opinion pieces, longer essays, and commentary. Starts thin; grows over time.

The three frameworks are positioned as instruments of a single theory of change: institutions and the people inside them move toward their goals when they can see clearly. The frameworks make different aspects of the institution visible in the same priced, serious terms.

### Contribution (scott-duncan.ca/contribution)

Organized under three subheadings that reflect Scott's current commitments.

- **Health.** Current projects including the Cree Board of Health work with Maggie, the Ontario PCN scorecard, opinion writing on Canadian primary care, and the Canadian health operators podcast in development.
- **Reconciliation.** Current commitments including the work with Kitigan Zibi Police Service, the micro-grants programme in development, and ongoing Indigenous partnership work.
- **Culture.** Current projects including the NAC audience development work with Banfield and continuing contributions to Canadian cultural institutions.

Each subsection has a short introductory paragraph describing Scott's commitment to the domain, followed by a list of current projects with brief descriptions. Updated quarterly.

## About / the essay

The essay lives at scott-duncan.ca/about or scott-duncan.ca/thought/about. Either works.

The essay is the anchor document. Everything else on the site points back to it, because it articulates the theory of change that underlies the frameworks and the commitments.

Place one photograph at the top (Canadian landscape, ideally something from the Maritimes trip described in the essay).

Add a small note at the bottom: "Written in April 2026. I'll revise this as the work evolves."

## How I work

A short page, linked from the footer or from a quiet location in the main nav.

> I take on a small number of engagements each year, usually by invitation, on files that fit my focus on Canadian institutions in health, culture, and reconciliation.
>
> Most of my thinking and writing is offered without charge. When a specific piece of client work takes shape, that's paid work and we set it up that way.
>
> If you think there's a fit, get in touch.

## Contact

Email, Montreal location, nothing else. No form, no scheduling tool.

## Design principles

- Quiet, considered, personal. Closer to a senior public intellectual's site than a consulting site.
- Muted palette. Off-white or cream background, dark grey or black body text, one restrained accent colour used sparingly.
- Serif body type (Garamond, Source Serif, or similar). Modest sans-serif for headings.
- Photography used throughout, not only in the Art section. An image can open the About page, sit on the home page, illustrate a framework subpage, or punctuate the Contribution section.
- Generous white space. Readable column widths on desktop. Mobile-first responsive design.
- No stock imagery. No gradients. No icons substituting for content.
- The three sections share a visual language. Paths, not subdomains, express their unity.

## Technical notes

- Platform: flexible. Static site generator (Astro, Eleventy, Hugo) is appropriate. The site does not need a CMS.
- Performance: fast load times, minimal JavaScript, privacy-respecting analytics or none.
- Accessibility: semantic HTML, keyboard navigable, reasonable contrast, alt text on photography.
- Bilingual readiness: English first. French version is desirable as a second pass but not required for the initial build.
- Redirects: experienceeconomics.io should redirect to scott-duncan.ca/thought/experience-economics once live.

## Build priority

1. Home page with the three-identity statement and the three paths.
2. About page with the essay.
3. Thought section, starting with the Experience Economics framework page (most developed).
4. Contribution section with current projects under the three domains.
5. Art section, migrated from the existing scott-duncan.ca.
6. Capacity Economics and Alignment Economics framework pages (can be stubs until Scott has more to say).
7. Writing section.
8. How I work and Contact pages.

## What to avoid

- Consulting-site language: services, offerings, packages, deliverables, leadership, expertise.
- Self-promotional phrasing: leading, trusted, proven, expert, renowned, award-winning.
- Generic mission-and-values bullets.
- Em-dashes anywhere on the site. Use commas, periods, or parentheses.
- Adverbs where they aren't doing work.
- Negative framing ("not X, but Y" constructions). Prefer positive statements.
- Any structural move that positions one of the three identities as primary and the others as secondary.

## A note on Scott's voice

Scott writes plainly. He prefers sentences that do one thing, short paragraphs, and minimal formatting. He dislikes hedging, flattery, and filler. The site copy should match this voice throughout. Avoid corporate consultant-speak, self-help language, and any phrasing that sounds like it came from a pitch deck.

When in doubt, write fewer words. If a sentence can be removed without losing meaning, remove it.
