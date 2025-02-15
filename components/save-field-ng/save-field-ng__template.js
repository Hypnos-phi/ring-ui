export default `<div class="ring-save-field" ng-form="saveFieldForm" rg-shortcuts="ring-save-field" shortcuts-map="keyMap" shortcuts-focus="focus">
  <span class="ring-save-field__transclude-placeholder" ng-transclude=""></span>

  <rg-button
    ng-show="saveFieldForm.$dirty && saveFieldForm.$valid"
    mode="primary"
    class="ring-save-field__button ng-hide"
    ng-mousedown="cancelBlur()"

    rg-promised-click="submitChanges($event)"
    promised-mode="loader"
  >
    {{wording.save}}
  </rg-button>

  <rg-button
    ng-show="saveFieldForm.$dirty && !loading"
    class="ring-save-field__button ng-hide"
    ng-click="cancelChanges($event)"
    ng-mousedown="cancelBlur()"
  >
    {{wording.cancel}}
  </rg-button>

  <rg-button
    ng-show="done"
    ng-disabled="true"
    class="ring-save-field__button ng-hide"
  >
    {{wording.saved}}
  </rg-button>
</div>`;
