export default `<div>
  <div ng-click="!ngDisabled && controls.select()" class="ring-avatar-editor__frame" ng-class="{
        'ring-avatar-editor_controlled': controlled,
        'ring-avatar-editor': !ngDisabled
    }" ng-show="model || default">
    <img alt="Avatar" class="ring-avatar-editor__img" ng-src="{{ model }}" ng-show="model">
    <img alt="Default avatar" class="ring-avatar-editor__img" ng-src="{{ default }}"
         ng-show="!model && default" ng-click="!ngDisabled && controls.select()">
    <rg-icon glyph="{{editIcon}}" size="16" class="ring-avatar-editor__icon" ng-if="!ngDisabled"></rg-icon>
  </div>
  <input class="ring-avatar-editor__file-input" rg-avatar-editor-file-input type="file" ng-model="fileInput" accept="image/*" ng-if="!ngDisabled">

  <rg-button
    delayed="true"
    ng-disabled="ngDisabled"
    ng-if="showAddButton && !model && !default"
    ng-click="controls.select()"
  >{{ getAddMessage() }}</rg-button>

  <rg-button
    ng-if="showDeleteButton&& model && !ngDisabled"
    danger="true"
    class="ring-avatar-editor__remove"
    ng-click="controls.remove()"
  >
    <span translate>{{ getDeleteLabel() }}</span>
  </rg-button>
</div>`;
