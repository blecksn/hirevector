

# Enhanced Hero Animation — Career Trajectory

## The Problem
The current trajectory arrow is nearly invisible — it blends into the dark background with just a thin line and faint glow. It doesn't communicate the platform's core message of career direction and upward momentum.

## The Solution
Replace the current subtle SVG arrow with a rich, multi-layered animated composition that tells the story: "Your career goes from scattered to directed, from stuck to soaring."

### Animation Concept: "Career Launchpad"
A dramatic animated scene showing a career trajectory launching upward with supporting visual elements:

1. **Animated trajectory path** — A thick, bright cyan arc that draws itself from bottom-left to upper-right with a prominent glowing trail. Much bolder stroke width (6-8px vs current 4px) and stronger glow.

2. **Pulsing data nodes along the path** — Small glowing dots that appear at intervals along the trajectory, representing career data points (skills, experience, goals being mapped). These pulse in sequence after the path draws.

3. **Floating grid/coordinate lines** — Faint grid lines in the background that fade in, giving a "data visualization" feel — reinforcing that this is a precision system, not guesswork.

4. **A glowing orb at the arrowhead** — Instead of a static triangle arrowhead, a bright pulsing orb that lands at the top-right, representing "your destination" — with a gentle continuous pulse animation.

5. **Scattered-to-aligned dots** — A few small dots on the left side that start scattered/random, then animate to align along the trajectory path — visually showing "alignment."

### Animation Timing (Bold but Fast)
- 0s: Grid lines fade in softly (0.4s)
- 0.2s: Scattered dots appear
- 0.5s: Trajectory arc draws itself (1s duration)
- 0.7s: Scattered dots animate to align on the path (0.6s)
- 1.2s: Data nodes pulse in sequence along the path (0.5s staggered)
- 1.5s: Glowing orb appears at the tip with a scale-in + continuous pulse

Total animation completes in ~2 seconds — dramatic but resolves quickly.

## Technical Details

### File: `src/components/HeroSection.tsx`
- Rewrite the `TrajectoryArrow` component with a richer SVG composition
- Add multiple animated layers: grid, path, nodes, scattered dots, orb
- Use framer-motion for all animations with coordinated delays
- Increase overall opacity and brightness so the animation is clearly visible
- Keep the SVG positioned as an absolute overlay on the right side of the hero

### Visual Specs
- Trajectory stroke: 6px width, bright cyan with strong gradient
- Glow filter: stronger blur (stdDeviation 10-12) and higher opacity
- Data nodes: 6-8px radius circles with cyan fill and glow
- Grid lines: very subtle (opacity 0.05-0.08) to add depth without distraction
- Orb: 12px radius with pulsing scale animation (1 to 1.3, infinite loop)

No other files need to change — this is entirely within the HeroSection component.

