export default `<div
  ng-show="dialog.active"
  ng-class="[!dialog.inSidebar && dialog.dialogStyles.container]"
  ng-click="dialog.handleClick($event)"
  ng-attr-data-portaltarget="{{!dialog.inSidebar  ? 'dialog-ng-popup-container' : null}}"
>
  <div ng-class="[dialog.dialogStyles.innerContainer]">
    <div data-anchor="dialog-container"
      ng-attr-data-in-sidebar="{{dialog.inSidebar  ? 'true' : 'false'}}"
      ng-attr-data-test="{{dialog.active ? 'ring-dialog' : null}}"
      ng-class="[
        dialog.styles.dialogContainer,
        dialog.cssClass,
        dialog.wideDialog && dialog.styles.wide,
        dialog.autoWidth && dialog.styles.autoWidth,
        dialog.inSidebar && dialog.styles.inSidebar,
        !dialog.inSidebar && dialog.dialogStyles.content,
        !dialog.inSidebar && dialog.islandStyles.island
      ]"
    >
      <div ng-class="[dialog.islandStyles.header, dialog.styles.header]"
        data-anchor="dialog-header"
        ng-show="dialog.title">
        <span ng-class="dialog.islandStyles.title">{{ dialog.title }}</span>
      </div>

      <div ng-class="[dialog.styles.scrollableWrapper, dialog.islandStyles.scrollableWrapper, dialog.scrollableWrapperClassName]">
        <div ng-class="[dialog.styles.content, dialog.islandStyles.content]">
          <form name="dialog.dialogForm" class="ring-form ring-js-shortcuts"
            novalidate>
            <rg-dialog-content></rg-dialog-content>

            <div class="ring-form__group" ng-show="dialog.error">
              <div ng-class="dialog.styles.error" ng-bind-html="dialog.error"></div>
            </div>
          </form>
        </div>
      </div>

      <div ng-class="dialog.styles.footer"
        ng-if="dialog.description.length || dialog.buttons.length">
        <div ng-class="dialog.styles.footerDescription"
          ng-if="dialog.description && dialog.description.length">
          <div ng-repeat="line in dialog.description">{{ line }}</div>
        </div>

        <div ng-class="dialog.styles.footerItems">
          <rg-button
            ng-repeat="button in dialog.buttons"
            ng-class="[dialog.styles.footerItem , button.cssClasses]"
            mode="{{button.default ? 'primary' : ''}}"
            text="button.text"
            ng-disabled="(button.default && dialog.dialogForm.$invalid) || button.disabled"
            ng-if="!button.hidden"
            data-test="dialog-footer-button"

            rg-promised-click="dialog.action(button)"
            promised-mode="loader"
          >{{ button.label }}
          </rg-button>
        </div>
      </div>

      <div data-anchor="dialog-custom-footer-container"></div>

      <div tabindex="-1" ng-show="false" data-anchor="focus-trap-fallback"></div>
    </div>
  </div>
</div>`;
