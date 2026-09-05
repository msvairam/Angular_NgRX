import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    
    <div class="app-counter-container">

        <div class="app-container">
            <app-counter-value/>
            <app-counter-button />
        </div>
    </div>

    
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
}