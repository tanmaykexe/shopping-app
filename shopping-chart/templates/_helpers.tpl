{{/*
Return the chart name.
*/}}
{{- define "shopping-app.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{/*
Return the full application name.
*/}}
{{- define "shopping-app.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels.
*/}}
{{- define "shopping-app.labels" -}}
app.kubernetes.io/name: {{ include "shopping-app.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
helm.sh/chart: {{ .Chart.Name }}-{{ .Chart.Version }}
{{- end -}}

{{/*
Selector labels.
*/}}
{{- define "shopping-app.selectorLabels" -}}
app.kubernetes.io/name: {{ include "shopping-app.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}
