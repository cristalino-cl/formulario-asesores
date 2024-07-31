"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.default = (0, vue_1.defineComponent)({
    name: 'MyForm',
    setup: function () {
        var form = (0, vue_1.reactive)({
            deviceType: '',
            deviceModel: '',
            operatingSystem: '',
            appVersion: '',
            incidentDate: '',
            problemDescription: '',
            reproduccionSteps: '',
            expectedBehavior: '',
            actualBehavior: '',
            severityLevel: '',
            hasPreviouslyOccurred: '',
            additionalComments: '',
            screenshots: []
        });
        var handleFileUpload = function (event) {
            var files = event.target.files;
            if (files) {
                form.screenshots = Array.from(files);
            }
        };
        var handleSubmit = function () {
            console.log('Form submitted:', form);
            // Add your form submission logic here
        };
        return {
            form: form,
            handleFileUpload: handleFileUpload,
            handleSubmit: handleSubmit
        };
    }
});
;
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-container") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: ("form-title") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.handleSubmit) }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("deviceType"), });
    // @ts-ignore
    [handleSubmit,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("deviceType"), value: ((__VLS_ctx.form.deviceType)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("deviceModel"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("deviceModel"), value: ((__VLS_ctx.form.deviceModel)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("operatingSystem"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("operatingSystem"), value: ((__VLS_ctx.form.operatingSystem)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("appVersion"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("appVersion"), value: ((__VLS_ctx.form.appVersion)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("incidentDate"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("datetime-local"), id: ("incidentDate"), required: (true), });
    (__VLS_ctx.form.incidentDate);
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("problemDescription"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("problemDescription"), value: ((__VLS_ctx.form.problemDescription)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("reproduccionSteps"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("reproduccionSteps"), value: ((__VLS_ctx.form.reproduccionSteps)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("expectedBehavior"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("expectedBehavior"), value: ((__VLS_ctx.form.expectedBehavior)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("actualBehavior"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("actualBehavior"), value: ((__VLS_ctx.form.actualBehavior)), required: (true), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("severityLevel"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("severityLevel"), value: ((__VLS_ctx.form.severityLevel)), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("low"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("medium"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("high"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("critical"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("hasPreviouslyOccurred"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("hasPreviouslyOccurred"), value: ((__VLS_ctx.form.hasPreviouslyOccurred)), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("yes"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("no"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("additionalComments"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("additionalComments"), value: ((__VLS_ctx.form.additionalComments)), });
    // @ts-ignore
    [form,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: ("form-group") }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("screenshots"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)(__assign({ onChange: (__VLS_ctx.handleFileUpload) }, { type: ("file"), id: ("screenshots"), multiple: (true) }));
    // @ts-ignore
    [handleFileUpload,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ type: ("submit") }, { class: ("submit-button") }));
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['form-container'];
        __VLS_styleScopedClasses['form-title'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['submit-button'];
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name = 'MyForm';
    var __VLS_internalComponent;
}
