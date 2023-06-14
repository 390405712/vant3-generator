(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as R, ref as M, createVNode as d, mergeProps as r, Fragment as P, createTextVNode as Y, isVNode as E } from "vue";
import { Form as q, CellGroup as H, Button as T, Field as m, Popup as G, Cascader as B, Calendar as K, DatetimePicker as J, Picker as L, Stepper as Q, Uploader as W, Switch as X, RadioGroup as Z, Radio as f, CheckboxGroup as i, Checkbox as o } from "vant";
function N(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !E(n);
}
const ae = /* @__PURE__ */ R({
  name: "FormGenerator",
  setup(n, {
    expose: x,
    attrs: V,
    slots: t,
    emit: $
  }) {
    const l = V, g = M(), c = {};
    return x(() => ({
      ...g.value,
      $refs: c
    })), () => {
      function U() {
        return d(q, r({
          class: "FormGenerator"
        }, l, {
          ref: g
        }), {
          default: () => [d(H, null, {
            default: () => [l.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return z(e);
            }), l.disabled === !0 || !l.onSubmit ? "" : t != null && t.default ? d(P, null, [t.default()[0].children]) : d(T, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [Y("提交")]
            })]
          })]
        });
      }
      function A(e, k) {
        var F;
        let I = k ? e.formItem.text : l.model[e.formItem.name];
        return d(m, r({
          "is-link": !0,
          readonly: !0,
          onClick: l.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: I,
          "onUpdate:modelValue": (j) => I = j
        }, e.formItem), {
          ...(F = e == null ? void 0 : e.formItem) == null ? void 0 : F.slots
        });
      }
      function _(e, k = "datetime") {
        let I;
        switch (k) {
          case "date":
            I = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "datehour":
            I = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
            break;
          case "year-month":
            I = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "month-day":
            I = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "time":
            I = e;
            break;
          case "datetime":
            I = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
            break;
        }
        return I;
      }
      function z(e) {
        var k, I, F, j, D;
        switch (c[e.formItem.name] = M(), e.type) {
          case "field":
            return d(m, r({
              ref: c[e.formItem.name],
              inputAlign: "right",
              modelValue: l.model[e.formItem.name],
              "onUpdate:modelValue": (u) => l.model[e.formItem.name] = u
            }, e.formItem, e.control), {
              ...(k = e == null ? void 0 : e.control) == null ? void 0 : k.slots
            });
          case "checkbox":
            return d(m, r({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let u;
                return d(i, r({
                  ref: c[e.formItem.name],
                  disabled: l.disabled,
                  direction: "horizontal",
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), N(u = e.control.checkboxGroup.map((a) => d(o, r(a, {
                  name: a.value
                }), {
                  default: () => [a.label],
                  ...a == null ? void 0 : a.slots
                }))) ? u : {
                  default: () => [u]
                });
              }
            });
          case "radio":
            return d(m, r({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let u;
                return d(Z, r({
                  ref: c[e.formItem.name],
                  disabled: l.disabled,
                  direction: "horizontal",
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), N(u = e.control.radioGroup.map((a) => d(f, r({
                  name: a.value
                }, a), {
                  default: () => [a.label],
                  ...a == null ? void 0 : a.slots
                }))) ? u : {
                  default: () => [u]
                });
              }
            });
          case "switch":
            return d(m, r({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var u;
                return d(X, r({
                  ref: c[e.formItem.name],
                  disabled: l.disabled,
                  size: "24px",
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => {
                    l.model[e.formItem.name] = a;
                  }
                }, e == null ? void 0 : e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                });
              }
            });
          case "uploader":
            return d(m, r({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var u;
                return d(W, r({
                  ref: c[e.formItem.name],
                  disabled: l.disabled,
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                });
              }
            });
          case "stepper":
            return d(m, r({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => d(Q, r({
                ref: c[e.formItem.name],
                disabled: l.disabled,
                "button-size": "21px",
                modelValue: l.model[e.formItem.name],
                "onUpdate:modelValue": (u) => l.model[e.formItem.name] = u
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return d(P, null, [A(e, !0), d(G, r({
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var u;
                return [d(L, r({
                  ref: c[e.formItem.name],
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    var b, s, S, y;
                    e.showPopup = !1, Array.isArray(a) ? (l.model[e.formItem.name] = a.reduce((h, w) => {
                      var C, v;
                      return h.push(typeof w == "object" ? w == null ? void 0 : w[((v = (C = e == null ? void 0 : e.control) == null ? void 0 : C.columnsFieldNames) == null ? void 0 : v.values) ?? "value"] : w), h;
                    }, []), e.formItem.text = a.map((h) => {
                      var w, C;
                      return typeof h == "object" ? h == null ? void 0 : h[((C = (w = e == null ? void 0 : e.control) == null ? void 0 : w.columnsFieldNames) == null ? void 0 : C.text) ?? "text"] : h;
                    }).join("/")) : (l.model[e.formItem.name] = a[((s = (b = e == null ? void 0 : e.control) == null ? void 0 : b.columnsFieldNames) == null ? void 0 : s.values) ?? "value"], e.formItem.text = a[((y = (S = e == null ? void 0 : e.control) == null ? void 0 : S.columnsFieldNames) == null ? void 0 : y.text) ?? "text"]);
                  }
                }, e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                })];
              }
            })]);
          case "datetimePicker":
            return d(P, null, [A(e), d(G, r({
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var u;
                return [d(J, r({
                  ref: c[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    var b;
                    e.showPopup = !1, l.model[e.formItem.name] = _(a, (b = e == null ? void 0 : e.control) == null ? void 0 : b.type);
                  }
                }, e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                })];
              }
            })]);
          case "calendar":
            return d(P, null, [A(e, ((I = e == null ? void 0 : e.control) == null ? void 0 : I.type) === "multiple"), d(K, r({
              ref: c[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              "show-confirm": ((F = e == null ? void 0 : e.control) == null ? void 0 : F.type) === "multiple",
              onConfirm: (u) => {
                var b;
                e.showPopup = !1;
                const a = (s) => {
                  var S, y, h;
                  return `${(S = s == null ? void 0 : s.getFullYear) == null ? void 0 : S.call(s)}-${String(((y = s == null ? void 0 : s.getMonth) == null ? void 0 : y.call(s)) + 1).padStart(2, "0")}-${String((h = s == null ? void 0 : s.getDate) == null ? void 0 : h.call(s)).padStart(2, "0")}`;
                };
                switch ((b = e == null ? void 0 : e.control) == null ? void 0 : b.type) {
                  case "multiple":
                    l.model[e.formItem.name] = u.reduce((s, S) => (s.push(a(S)), s), []), e.formItem.text = `选择了 ${u.length} 个日期`;
                    break;
                  case "range":
                    l.model[e.formItem.name] = [a(u[0]), a(u[1])];
                    break;
                  default:
                    l.model[e.formItem.name] = a(u);
                    break;
                }
              }
            }, e.control), {
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            })]);
          case "cascader":
            return d(P, null, [A(e, !0), d(G, r({
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var u;
                return [d(B, r({
                  ref: c[e.formItem.name],
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (a) => {
                    e.showPopup = !1, l.model[e.formItem.name] = a.value, e.formItem.text = a.selectedOptions.map((b) => {
                      var s, S;
                      return b[((S = (s = e == null ? void 0 : e.control) == null ? void 0 : s.fieldNames) == null ? void 0 : S.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                })];
              }
            })]);
          case "slot":
            return d(m, r({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(D = e == null ? void 0 : e.control) == null ? void 0 : D.slots,
              input: () => {
                var u, a, b, s, S, y, h, w;
                return (a = (u = e == null ? void 0 : e.control) == null ? void 0 : u.slots) != null && a.input && typeof ((s = (b = e == null ? void 0 : e.control) == null ? void 0 : b.slots) == null ? void 0 : s.input) == "function" ? d(P, null, [(h = (y = (S = e == null ? void 0 : e.control) == null ? void 0 : S.slots) == null ? void 0 : y.input) == null ? void 0 : h.call(y, {
                  form: l.model,
                  data: l.model[e.formItem.name]
                })]) : t[e.formItem.name] ? d(P, null, [(w = t[e.formItem.name]) == null ? void 0 : w.call(t, {
                  form: l.model,
                  data: l.model[e.formItem.name]
                })]) : l.model[e.formItem.name];
              }
            });
        }
      }
      return U();
    };
  }
}), p = (n, x, V, t) => {
  if (!Array.isArray(n))
    return [];
  const $ = [];
  let l = [];
  return t && (l = Object.keys(t)), n.forEach((g) => {
    let c = {
      label: typeof g == "string" ? g : g[x],
      value: typeof g == "string" ? g : g[V]
    };
    t && l.forEach((U) => {
      c[U] = g[U];
    }), $.push(c);
  }), $;
}, O = (n, x = []) => {
  const V = {
    field: "输入",
    stepper: "输入",
    picker: "选择",
    radio: "选择",
    checkbox: "选择",
    switch: "选择",
    datetimePicker: "选择",
    calendar: "选择",
    cascader: "选择",
    uploader: "上传",
    slot: ""
  };
  return n.forEach((t) => {
    const $ = { required: !0, message: `请${V[t.type] || "完善"}${t.formItem.label || ""}`, trigger: "onChange" };
    if (!x.includes(t.formItem.name) && (t.formItem.required = !0, !["stepper", "switch"].includes(t.type))) {
      t.formItem.rules ? t.formItem.rules.unshift($) : t.formItem.rules = [$];
      for (let l = 0; l < t.formItem.rules.length; l++) {
        let g = t.formItem.rules[l];
        g.message || (g.message = "格式有误");
      }
    }
  }), n;
}, ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: p,
  setRequired: O
}, Symbol.toStringTag, { value: "Module" }));
export {
  ae as FormGenerator,
  ue as GeneratorUtils
};
//# sourceMappingURL=index.js.map
