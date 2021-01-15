{{- define "nginx.fullname" -}}
  {{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{- define "nginx.labels" -}}
  {{- printf "[]" -}}
{{- end -}}

{{- define "nginx.ingress.host" -}}
  {{- printf "%s-api.dev.io" .Release.Name | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}
