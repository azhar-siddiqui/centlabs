import { ReportPreviewScreen } from "@/components/report-preview-screen";
import { site } from "@/lib/site";

export function ReportPreview() {
  return <ReportPreviewScreen year={site.year} sampleDate={site.sampleDate} />;
}
