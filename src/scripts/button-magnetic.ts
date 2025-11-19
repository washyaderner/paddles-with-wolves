/**
 * Magnetic Button Effect
 * Buttons subtly follow cursor on hover (desktop only)
 */

class MagneticButtons {
  private buttons!: NodeListOf<HTMLElement>;
  private strength: number = 0.3;

  constructor() {
    // Only enable on desktop with hover capability
    if (!this.isDesktop()) {
      this.buttons = document.querySelectorAll('[data-no-init]'); // Empty NodeList
      return;
    }

    this.buttons = document.querySelectorAll(
      'button, .btn, [role="button"], .btn-magnetic'
    );

    this.init();
  }

  private isDesktop(): boolean {
    return window.matchMedia('(hover: hover) and (min-width: 769px)').matches;
  }

  private init(): void {
    this.buttons.forEach(button => {
      button.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
      button.addEventListener('mousemove', this.handleMouseMove.bind(this));
      button.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    });
  }

  private handleMouseEnter(e: Event): void {
    const button = e.currentTarget as HTMLElement;
    button.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
  }

  private handleMouseMove(e: MouseEvent): void {
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * this.strength;
    const deltaY = (e.clientY - centerY) * this.strength;

    button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  }

  private handleMouseLeave(e: Event): void {
    const button = e.currentTarget as HTMLElement;
    button.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    button.style.transform = 'translate(0, 0)';

    // Reset transition after animation completes
    setTimeout(() => {
      button.style.transition = '';
    }, 400);
  }

  public destroy(): void {
    this.buttons.forEach(button => {
      button.removeEventListener('mouseenter', this.handleMouseEnter.bind(this));
      button.removeEventListener('mousemove', this.handleMouseMove.bind(this));
      button.removeEventListener('mouseleave', this.handleMouseLeave.bind(this));
      button.style.transform = '';
      button.style.transition = '';
    });
  }
}

// Initialize
let magneticButtons: MagneticButtons;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    magneticButtons = new MagneticButtons();
  });
} else {
  magneticButtons = new MagneticButtons();
}

// Re-initialize on Astro navigation
document.addEventListener('astro:page-load', () => {
  if (magneticButtons) {
    magneticButtons.destroy();
  }
  magneticButtons = new MagneticButtons();
});

export default MagneticButtons;
