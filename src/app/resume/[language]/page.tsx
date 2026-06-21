import IconBlog from '@/components/icon/Blog'
import IconExternalLink from '@/components/icon/ExternalLink'
import IconGithub from '@/components/icon/Github'
import IconLinkedin from '@/components/icon/LinkedIn'
import IconNpm from '@/components/icon/Npm'
import IconVSCode from '@/components/icon/VSCode'
import ChatbotButton from '@/components/profile/ChatbotButton'
import ChatbotSection from '@/components/profile/ChatbotSection'

export async function generateStaticParams() {
  return [{ language: 'ko' }, { language: 'ja' }]
}

/* ── 課題→成果 テーブル ── */
function ChallengeTable({
  language,
  items,
}: {
  language: 'ko' | 'ja'
  items: { challenge: React.ReactNode; result: React.ReactNode }[]
}) {
  const t = (ko: string, ja: string) => (language === 'ko' ? ko : ja)
  return (
    <table data-challenge-table className="mt-4 w-full border-collapse text-sm">
      <thead>
        <tr className="bg-muted/30">
          <th className="border border-border/60 px-3 py-2 text-left font-medium w-[5%]" />
          <th className="border border-border/60 px-3 py-2 text-left font-medium w-[35%]">
            {t('과제', '課題')}
          </th>
          <th className="border border-border/60 px-3 py-2 text-left font-medium">
            {t('대응・성과', '取り組み・成果')}
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((row, i) => (
          <tr key={i} className="hover:bg-muted/10">
            <td className="border border-border/60 px-3 py-2 text-center text-xs text-muted-foreground">
              {i + 1}
            </td>
            <td className="border border-border/60 px-3 py-2 align-top">
              {row.challenge}
            </td>
            <td className="border border-border/60 px-3 py-2 align-top">
              {row.result}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/* ── 技術タグ ── */
function TechTags({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}

export default function ResumePage({
  params,
}: {
  params: { language: 'ko' | 'ja' }
}) {
  const language = params.language
  const t = (ko: string, ja: string) => (language === 'ko' ? ko : ja)

  return (
    <div className="mx-auto w-full max-w-[720px] px-5 py-10 sm:px-6">
      {/* ===== 헤더 ===== */}
      <header className="mb-8 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">
            {t('이호연', '李虎演（イホヨン）')}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {t('프론트엔드 엔지니어', 'フロントエンドエンジニア')}
          </p>
        </div>
        <p className="mt-4 sm:mt-0 text-sm text-muted-foreground">
          {t('최종 업데이트: 2026년 6월', '最終更新日：2026年6月')}
        </p>
      </header>

      {/* ===== 연락처 ===== */}
      <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1">
          <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
            <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z" />
          </svg>
          {t('일본, 도쿄', '日本、東京')}
        </span>
        <div className="flex gap-3">
          <a href="https://github.com/ho1112" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <IconGithub className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/lee-hoyeon/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            <IconLinkedin className="h-5 w-5" />
          </a>
          <a href="mailto:carrien1112@gmail.com" className="hover:text-foreground transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
        </div>
      </div>

      <hr className="border-border/50 mb-8" />

      {/* ===== 직무요약 ===== */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">{t('📝 직무요약', '📝 職務要約')}</h2>
        <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-wrap">
          {t(
            `2018년부터 웹 엔지니어로서 개발에 종사하며, 약 8년의 실무 경험을 보유하고 있습니다. 직근 5년간은 React/Next.js를 활용한 프론트엔드 개발에 특화하여, 대규모 트래픽의 toC 서비스 UI/UX 개선 및 toB 업무 시스템 개발 등 다양한 프로젝트에서 설계·구현·운용을 담당해 왔습니다.

특히 프론트엔드 전문가가 부재하거나 기술 부채가 쌓인 환경에서, 현장의 과제를 스스로 발견하고 아키텍처 설계, 기술 선정, DX 개선을 자발적으로 제안·주도한 경험이 있습니다. Core Web Vitals 최적화를 통한 SEO 개선 실적이 있으며, 기획·디자인 단계에서부터 PdM이나 디자이너와 밀접하게 연계하여 프로덕트 관점에서 최적의 기술적 해결책을 도출하는 것을 강점으로 하고 있습니다.`,
            `2018年よりWebエンジニアとして開発に従事し、約8年の実務経験を有しています。直近5年間はReact/Next.jsを用いたフロントエンド開発に特化し、大規模トラフィックを持つtoCサービスのUI/UX改善や、toB向けの業務システム開発など、多様なプロジェクトにおいて設計・実装・運用を担当してきました。

特にフロントエンド専門家が不在または技術負債が蓄積した環境において、現場の課題を自ら発見し、アーキテクチャ設計、技術選定、DX改善を自発的に提案・主導した経験があります。Core Web Vitalsの最適化を通じたSEO改善の実績があり、企画・デザイン段階からPdMやデザイナーと密接に連携し、プロダクト視点で最適な技術的解決策を導き出すことを強みとしています。`
          )}
        </p>
      </section>

      <hr className="border-border/50 mb-10" />

      {/* ===== 직무경력 ===== */}
      <section className="mb-10">
        <h2 className="mb-8 text-lg font-bold">
          {t('🧑‍💻 직무경력', '🧑‍💻 職務経歴')}
        </h2>

        {/* ========== レバレジーズ ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 レバレジーズ株式会社（업무위탁・2024/03〜현재）',
              '🏢 レバレジーズ株式会社（業務委託・2024/03〜現在）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('인재스카우트 업계', '人材スカウト業界')}
          </p>
          <p className="mt-3 text-sm font-medium">
            {t(
              '신졸용 다이렉트 리크루팅 서비스의 toB・toC 시스템 개발',
              '新卒向けダイレクトリクルーティングサービスのtoB・toCシステム開発'
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            PdM:1, Designer:3, Engineer:8
          </p>
          <div className="mt-3 text-sm text-foreground space-y-1.5">
            <p>
              ・ {t(
                '리리스 후 약 2년이 경과한 프로덕트에 참가',
                'リリースから約2年が経過したプロダクトに参画'
              )}
            </p>
            <p>
              ・ {t(
                'Laravel 중심 팀에서 프론트엔드 전문 엔지니어로 참여. 프론트엔드 관련 의사결정(아키텍처 설계, 기술 선정, 코드 컨벤션)을 주도',
                'Laravel中心のチームでフロントエンド専任エンジニアとして参画。フロントエンド関連の意思決定（アーキテクチャ設計、技術選定、コードコンベンション）を主導'
              )}
            </p>
            <p>
              ・ {t(
                'toB(기업용 관리 화면) 및 toC(학생용 서비스)의 프론트엔드 개발 담당',
                'toB（企業向け管理画面）およびtoC（学生向けサービス）のフロントエンド開発を担当'
              )}
            </p>
            <p>
              ・ {t(
                '프론트엔드 개발을 메인으로 담당하며, 필요에 따라 GraphQL 쿼리 작성 및 백엔드(Laravel/PHP) 수정도 일부 수행 (업무 비율: 프론트엔드 80%, 백엔드 20%)',
                'フロントエンド開発をメインとしつつ、必要に応じてGraphQLクエリ作成やバックエンド（Laravel/PHP）の修正も一部対応（業務割合：フロントエンド80%、バックエンド20%）'
              )}
            </p>
          </div>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '대규모 아키텍처 정비 및 기술 부채 해소' : '大規模アーキテクチャ整備および技術負債の解消'}</strong>
                    <br />
                    {language === 'ko'
                      ? '백엔드 중심 조직이었기에 프론트엔드의 명확한 룰이 부재했다. 기준 없는 컴포넌트의 혼재, 방치된 Storybook 등 누적된 기술 부채로 인해 유지보수와 협업이 어려운 상태였다.'
                      : 'バックエンド中心の組織であったため、フロントエンドの明確なルールが不在だった。基準なく混在するコンポーネントや放置されたStorybookなど、蓄積した技術負債により保守・協業が困難な状態だった。'}
                  </>
                ),
                result: (
                  <>
                    {language === 'ko'
                      ? '[Phase 1] 전체 컴포넌트를 전수 조사하여 의존 관계 파악 후, 중복되는 컴포넌트를 통합하고 미사용 코드를 대량 삭제'
                      : '[Phase 1] 全コンポーネントの棚卸しを実施し、依存関係を把握した上で重複コンポーネントを統合、未使用コードを大量削除'}
                    <br />
                    {language === 'ko'
                      ? '[Phase 2] 애매한 Atomic 구조를 폐기. pageExtensions를 활용해 App Router 방식의 Colocation 패턴을 Pages Router 환경에 백포팅하여, 전역 UI와 페이지 전용(_components/) UI를 엄격히 분리'
                      : '[Phase 2] 曖昧なAtomic構造を廃止。pageExtensionsを活用し、App Router方式のColocationパターンをPages Router環境にバックポートして、グローバルUIとページ専用(_components/)UIを厳格に分離'}
                    <br />
                    {language === 'ko'
                      ? '[Phase 3] 방치된 Storybook을 재구축 후 스테이징 환경에 배포하여 디자이너가 상시 확인할 수 있는 UI/아이콘 카탈로그 환경 마련. 컴포넌트 추가 시 스토리 작성을 의무화하는 룰을 정착시키고, Next.js 13에서 14로 버전 업그레이드 완수'
                      : '[Phase 3] 放置されていたStorybookを再構築し、ステージング環境にデプロイすることで、デザイナーが常時確認できるUI・アイコンカタログ環境を構築。コンポーネント追加時のストーリー作成を義務化するルールを定着させ、Next.js 13から14へのバージョンアップを完遂'}
                  </>
                ),
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '성능 최적화 및 DX(개발자 경험) 향상' : 'パフォーマンス最適化およびDX(開発者体験)向上'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'Sentry 에러가 방치된 채 누적되고 있었으나 체계적인 모니터링이 부재했다. 프로젝트 규모가 커짐에 따라 번들 최적화, 테스트 자동화 등 프론트엔드 환경 전반의 DX를 주도적으로 개선할 필요가 있었다.'
                      : 'Sentryエラーが放置されたまま蓄積していたが、体系的なモニタリングが不在だった。プロジェクト規模の拡大に伴い、バンドル最適化やテスト自動化など、フロントエンド環境全体のDXを主導的に改善する必要があった。'}
                  </>
                ),
                result: (
                  <>
                    {language === 'ko'
                      ? '[DX 향상] 패키지 매니저를 npm에서 Bun으로 전환하여 CI/CD 설치 속도 대폭 개선. ESLint 룰 정비 및 pre-commit hooks 도입으로 리뷰 품질 검증 자동화'
                      : '[DX向上] パッケージマネージャーをnpmからBunへ移行し、CI/CDのインストール速度を大幅に改善。ESLintルール整備およびpre-commit hooks導入でレビュー品質検証を自動化'}
                    <br />
                    {language === 'ko'
                      ? '[성능 최적화] 무거운 패키지 의존성을 재검토하고 Tree-shaking을 적용하여 프로덕션 번들 사이즈 최소화'
                      : '[パフォーマンス最適化] 重いパッケージ依存関係を見直し、Tree-shakingを適用して本番バンドルサイズを最小化'}
                    <br />
                    {language === 'ko'
                      ? '[안정성 확보] Sentry 모니터링 체계를 구축해 주간 에러를 94% 절감(1,065건 → 60건). Playwright E2E 테스트를 도입하여 수동 검증 시간을 15분에서 2분으로 단축'
                      : '[安定性確保] Sentryモニタリング体制を構築し、週次エラーを94%削減（1,065件→60件）。Playwright E2Eテストを導入し、手動検証時間を15分から2分に短縮'}
                  </>
                ),
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '신규 기술 PoC 검증 및 리딩' : '新規技術のPoC検証およびリード'}</strong>
                    <br />
                    {language === 'ko'
                      ? '기획(PdM) 및 디자인 단계에서 구상된 신규 기능의 기술적 실현 가능성을 사전에 검증하고 최적의 라이브러리를 선정하는 역할을 전담했다.'
                      : '企画（PdM）やデザイン段階で構想された新規機能の技術的実現可能性を事前に検証し、最適なライブラリを選定する役割を専任した。'}
                  </>
                ),
                result: (
                  <>
                    {language === 'ko'
                      ? 'Recharts(차트), dnd-kit(드래그 앤 드롭), Lexical(에디터), Google Calendar API 등 다수의 라이브러리를 직접 테스트하여 커스텀 가능 범위와 기술적 한계를 파악'
                      : 'Recharts（チャート）、dnd-kit（ドラッグ＆ドロップ）、Lexical（エディタ）、Google Calendar APIなど、多数のライブラリを実際にテストし、カスタマイズ可能範囲と技術的限界を把握'}
                    <br />
                    {language === 'ko'
                      ? '단순 피드백에 그치지 않고 동작 가능한 데모를 직접 구현·시연하여, PdM과 디자이너가 빠르고 정확하게 프로덕트 의사결정을 내릴 수 있도록 리드'
                      : '単なるフィードバックに留まらず、動作可能なデモを直接実装・実演することで、PdMやデザイナーが迅速かつ正確なプロダクト意思決定を下せるようリード'}
                  </>
                ),
              },
            ]}
          />

          <ul className="mt-4 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                '채용 활동 지표(오퍼 전송·열람·수락 등)를 막대/선 그래프로 시각화하는 대시보드 개발',
                '採用活動指標（オファー送信・開封・承諾など）を棒/折れ線グラフで視覚化するダッシュボードを開発'
              )}
            </li>
            <li>
              {t(
                '이벤트 등록부터 학생 응답, 참가자 CSV 다운로드까지 이어지는 관리자용 이벤트 운영 플로우 설계 및 구현',
                'イベント登録から学生応答、参加者CSVダウンロードまでの一連の管理者用イベント運営フローを設計・実装'
              )}
            </li>
            <li>
              {t(
                '외부 서비스 유입 판정과 인증 상태에 따른 동적 리다이렉트 구현으로 온보딩 도선 최적화',
                '外部サービスからの流入判定と認証状態に応じた動的リダイレクト実装によるオンボーディング導線の最適化'
              )}
            </li>
            <li>
              {t(
                '검색 조건 저장, 유저 비표시 리스트, 한정 이벤트 등 다수의 기능 개발',
                '検索条件保存、ユーザー非表示リスト、限定イベントなど多数の機能開発'
              )}
            </li>
            <li>
              {t(
                '프로덕트 리브랜딩에 따른 UI 리뉴얼 대응 (테마 컬러, 로고 등 전체 쇄신)',
                'プロダクトのリブランディングに伴うUIリニューアル対応（テーマカラー、ロゴ等の全体刷新）'
              )}
            </li>
          </ul>

          <TechTags items={['Next.js', 'React', 'TypeScript', 'SCSS', 'Docker', 'Bun', 'Storybook', 'Playwright', 'Apollo Client', 'GraphQL', 'PostgreSQL']} />
        </div>

        {/* ========== ピッコマ ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 ピッコマ（업무위탁・2023/09〜2024/02）',
              '🏢 ピッコマ（業務委託・2023/09〜2024/02）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('웹툰・웹소설 업계', 'マンガ・ノベル業界')}
          </p>
          <p className="mt-3 text-sm font-medium">
            {t(
              'WEB 소설 투고 페이지(연 1회 개최) 마이그레이션 및 신규 개발 — 2회분 담당',
              'WEB小説投稿ページ（年1回開催）マイグレーションおよび新規開発 — 2回分担当'
            )}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Designer:1, Engineer:1
          </p>
          <div className="mt-3 text-sm text-foreground space-y-1.5">
            <p>
              ・ {t(
                '전임 담당자 퇴사로 전년도(Vue) 코드 유지보수 불가 상태. 사내에 Next.js 경험자가 없어 Next.js를 주력으로 다루는 프론트엔드 엔지니어로서 참가',
                '前任担当者の退職で前年度（Vue）コードの保守が不可能な状態。社内にNext.js経験者がおらず、Next.jsを主力とするフロントエンドエンジニアとして参画'
              )}
            </p>
            <p>
              ・ {t(
                '프로젝트 생성부터 아키텍처 설계·구현까지 단독 담당',
                'プロジェクト作成からアーキテクチャ設計・実装まで単独で担当'
              )}
            </p>
          </div>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'Vue→Next.js 전면 재구축' : 'Vue→Next.js全面再構築'}</strong>
                    <br />
                    {language === 'ko'
                      ? '매년 비주얼이 바뀌고 시즌별로도 테마가 변경되는 이벤트 페이지의 특성상 확장 가능한 아키텍처 설계가 필요했다.'
                      : '毎年ビジュアルが変わり、シーズンごとにテーマも変更されるイベントページの特性上、拡張可能なアーキテクチャ設計が必要だった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'Next.js App Router로 프로젝트를 처음부터 구축. "바뀌는 것(연도별 비주얼)"과 "안 바뀌는 것(폼·store·API)"을 분리하는 구조를 설계. 연도별 아카이브 분리(contents/{year}/)와 yearManager를 통한 자동 분기로 새 연도 추가 시 공통 로직을 건드리지 않는 확장 가능한 아키텍처를 구축. 연도 내 시즌별 4회 테마·이미지 변경에도 대응'
                  : 'Next.js App Routerでプロジェクトをゼロから構築。「変わるもの（年度別ビジュアル）」と「変わらないもの（フォーム・store・API）」を分離する構造を設計。年度別アーカイブ分離（contents/{year}/）とyearManagerによる自動分岐で、新年度追加時に共通ロジックを触らない拡張可能なアーキテクチャを構築。年度内シーズン別4回のテーマ・イメージ変更にも対応',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '메인 비주얼 애니메이션 구현' : 'メインビジュアルアニメーション実装'}</strong>
                    <br />
                    {language === 'ko'
                      ? '2024년도는 디자인이 완전히 변경되어 메인 비주얼에 동적 애니메이션 연출과 스크롤 연동 제어가 요구되었다.'
                      : '2024年度はデザインが完全に変更され、メインビジュアルに動的アニメーション演出とスクロール連動制御が求められた。'}
                  </>
                ),
                result: language === 'ko'
                  ? '정지 이미지에 CSS 애니메이션으로 줌인 효과를 적용하고 2장의 캐릭터 이미지를 크로스페이드로 부드럽게 전환하는 루프 연출을 구현. Intersection Observer API로 뷰포트 이탈 시 애니메이션을 일시정지하고 재진입 시 마지막 상태에서 이어서 재생하도록 제어'
                  : '静止画像にCSSアニメーションでズームイン効果を適用し、2枚のキャラクター画像をクロスフェードで滑らかに切り替えるループ演出を実装。Intersection Observer APIでビューポート離脱時にアニメーションを一時停止し、再進入時に最後の状態から再生を再開するよう制御',
              },
            ]}
          />
          <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>{t('output: \'export\'로 정적 빌드하여 CDN 서빙 구조를 채택', 'output: \'export\'で静的ビルドし、CDNサーブ構成を採用')}</li>
            <li>{t('일본-한국 팀 간 기술 연동 및 커뮤니케이션 브리지 역할을 수행', '日韓チーム間の技術連携およびコミュニケーションブリッジ役を担当')}</li>
          </ul>

          <TechTags items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS', 'REST API', 'Redux Toolkit', 'Xcode Simulator', 'Figma']} />
        </div>

        {/* ========== skyticket ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 skyticket（업무위탁・2021/05〜2023/07）',
              '🏢 skyticket（業務委託・2021/05〜2023/07）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('여행・호텔 업계', '旅行・ホテル業界')}
          </p>
          <p className="mt-3 text-sm font-medium">
            {t(
              'MAU 700만 규모의 호텔·투어·항공권 예약 시스템 개발 및 SEO 최적화',
              'MAU700万規模のホテル・ツアー・航空券予約システム開発およびSEO最適化'
            )}
          </p>

          {/* ── ホテルチーム ── */}
          <h4 className="mt-6 text-sm font-bold">
            {t('◉ 호텔팀', '◉ ホテルチーム')}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            PdM:1, Designer:2, Engineer:8 (FE:4, BE:4)
          </p>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'Web Components 글로벌 네비게이션' : 'Web Componentsグローバルナビゲーション'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'PHP(항공) Vue(렌터카) React(호텔) 등 이기종 기술 스택으로 구성된 서비스들의 상단 네비게이션이 각각 별도로 구현되어 있어 디자인이나 링크를 변경할 때마다 모든 서비스 담당자가 개별 대응해야 하는 상황이었다.'
                      : 'PHP（航空）、Vue（レンタカー）、React（ホテル）など異なる技術スタックで構成されたサービスの上部ナビゲーションがそれぞれ別途実装されており、デザインやリンクを変更するたびに全サービス担当者が個別対応する必要があった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'Web Components(Lit)를 활용하여 기술 스택에 의존하지 않는 통합 글로벌 네비게이션을 설계 및 개발했다. Shadow DOM으로 캡슐화하여 기존 서비스의 스타일과 충돌하는 일 없이 부드럽게 도입할 수 있었다. 또한 PC, 태블릿, 스마트폰 등 디바이스 환경별로 컴포넌트를 분기 처리하고 각각에 맞는 반응형 대응을 실시했다. 해당 기능은 프로젝트 기획 단계부터 유지보수까지 단독으로 담당하여 마무리했다.'
                  : 'Web Components（Lit）を活用し、技術スタックに依存しない統合グローバルナビゲーションを設計・開発した。Shadow DOMによるカプセル化を行うことで、既存サービスのスタイルと衝突することなくスムーズに導入できた。また、PC・タブレット・スマートフォンの各デバイス環境に合わせてコンポーネントを分岐させ、最適なレスポンシブ対応を実施した。本機能はプロジェクトの立ち上げから保守まで単独で担当した。',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '호텔·SEO 리포지토리 통합' : 'ホテル・SEOリポジトリ統合'}</strong>
                    <br />
                    {language === 'ko'
                      ? '호텔 예약 앱 본체와 SEO 전용 페이지가 별도 리포지토리로 분리 운영되어 호텔 API와 컴포넌트 등 핵심 로직이 중복 관리되고 있었다. 또한 새로운 패턴의 SEO 페이지가 추가될 때마다 인프라 팀에 라우팅 설정을 의뢰해야 하는 구조적인 병목 현상이 있어 신속한 개발에 지장이 있었다.'
                      : 'ホテル予約アプリ本体とSEO専用ページが別リポジトリで分離運用されており、ホテルAPIやコンポーネントなどのコアロジックが重複管理されていた。また、新規パターンのSEOページが追加される度にインフラチームへルーティング設定を依頼しなければならない構造的なボトルネックがあり、迅速な開発の妨げになっていた。'}
                  </>
                ),
                result: language === 'ko'
                  ? '단일 리포지토리 통합을 직접 제안하고 작업을 주도했다. 통합을 통해 라우팅을 프론트엔드 단에서 일괄 제어하게 되어, 인프라 팀 의존 없이 신속하게 페이지를 확장할 수 있게 되었다. 동시에 컴포넌트 경계를 재정의(organisms/uiParts)하여 중복되던 API와 로직을 성공적으로 일원화하고 유지보수 효율을 크게 향상시켰다.'
                  : '単一リポジトリへの統合を自ら提案し、移行作業を主導した。統合によりルーティングをフロントエンドで一括制御できるようになり、インフラチームに依存することなく迅速なページ拡張が可能になった。同時にコンポーネント境界（organisms / uiParts）を再定義し、重複していたAPIやロジックの一元化に成功、保守効率を大幅に向上させた。',
              },
            ]}
          />

          <ul className="mt-4 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                '성인/어린이별 검색 및 단체 예약용 다중 객실 검색 기능, 해외 호텔 검색 메인 페이지 등 신규 기능 개발',
                '大人・子供別検索および団体予約用複数部屋検索機能、海外ホテル検索メインページなど新規機能開発'
              )}
            </li>
            <li>
              {t(
                'Google Tag Manager와 dataLayer 구축을 통한 웹 분석 환경 세팅',
                'Google Tag ManagerとdataLayer構築によるWeb分析環境の整備'
              )}
            </li>
            <li>
              {t(
                'E2E 테스트(Cypress) 도입으로 디그레 체크 및 테스트 시간 단축',
                'E2Eテスト（Cypress）導入でデグレチェックおよびテスト時間短縮'
              )}
            </li>
          </ul>

          {/* ── SEO対応チーム ── */}
          <h4 className="mt-8 text-sm font-bold">
            {t('◉ SEO 대응팀', '◉ SEO対応チーム')}
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            PdM:1, Engineer:2 (FE:2)
          </p>
          <div className="mt-2 text-sm text-foreground space-y-1.5">
            <p>
              ・ {t(
                '메인 프론트엔드 엔지니어로서 SEO 개선 작업을 주도',
                'メインフロントエンドエンジニアとしてSEO改善作業を主導'
              )}
            </p>
            <p>
              ・ {t(
                '1주일 단위 스프린트 환경에서 PdM·외부 SEO 컨설턴트 등과 긴밀히 협업하며, 매주 기획-구현-데모 사이클을 반복하는 애자일 개발 주도',
                '1週間単位のスプリント環境下でPdM・外部SEOコンサルタント等と緊密に協業し、毎週の企画・実装・デモサイクルを反復するアジャイル開発を主導'
              )}
            </p>
          </div>

          <ChallengeTable
            language={language}
            items={[
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? 'Core Web Vitals 개선' : 'Core Web Vitals改善'}</strong>
                    <br />
                    {language === 'ko'
                      ? 'Core Web Vitals 스코어가 "개선 필요(황색)"으로 UX 품질과 Google 검색 순위 양쪽에 부정적인 영향을 미치고 있었다. 이미지 최적화와 렌더링 성능 개선이 시급했다.'
                      : 'Core Web Vitalsスコアが「改善が必要（黄色）」で、UX品質とGoogle検索順位の双方に悪影響を及ぼしていた。イメージ最適化とレンダリングパフォーマンス改善が急務だった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'CDN을 활용한 이미지 리사이징 및 지연 로딩(Lazy Loading)을 도입하여 FCP, LCP, CLS, FID 지표를 전반적으로 개선했으며, Lighthouse 스코어를 "양호(녹색)" 단계까지 끌어올렸다. 또한 H태그 계층 구조 재정비, 구조화 마크업 및 canonical tag 적용 등 기술적 SEO를 완수하여 검색 엔진 친화적인 환경을 구축했다.'
                  : 'CDNを活用した画像リサイジングおよび遅延読み込み（Lazy Loading）を導入し、FCP、LCP、CLS、FID指標を全般的に改善、Lighthouseスコアを「良好（緑色）」段階まで引き上げた。さらに、Hタグの階層構造の再整備、構造化マークアップおよびcanonical tagの適用など、テクニカルSEOを完遂し検索エンジンに優しい環境を構築した。',
              },
              {
                challenge: (
                  <>
                    <strong>{language === 'ko' ? '데이터 기반 SEO 페이지 대량 생성' : 'データ基盤SEOページ大量生成'}</strong>
                    <br />
                    {language === 'ko'
                      ? '온천, 기차역, 테마파크 주변의 호텔 추천 SEO 페이지를 대량 양산하고자 했으나, 사내 DB에는 관련 데이터가 전혀 없었다. PdM이 선정한 타겟 기초 자료를 바탕으로 페이지 생성을 자동화할 시스템적 해결책이 필요한 상황이었다.'
                      : '温泉、駅、テーマパーク周辺のホテル推薦SEOページを大量生産したかったが、社内DBには関連データが全く存在しなかった。PdMが選定したターゲットの基礎資料を基に、ページ生成を自動化するシステム的な解決策が必要な状況だった。'}
                  </>
                ),
                result: language === 'ko'
                  ? 'PdM이 자료 조사용으로 작성하던 구글 스프레드시트를 프론트엔드의 데이터 소스로 직접 연동하는 방안을 제안했다. 스프레드시트의 타겟 좌표를 읽어와 API로 주변 인기 호텔과 어메니티 기반 FAQ를 자동 조합하는 파이프라인을 구축했다. 렌더링 부하를 고려해 SSG(ISR) 방식을 적용함으로써 성능 저하 없이 대량의 SEO 페이지 자동 생성에 성공했고, 오가닉 검색 유입을 크게 강화했다.'
                  : 'PdMが資料調査用として作成していたGoogleスプレッドシートを、フロントエンドのデータソースとして直接連携させるアプローチを自ら提案した。スプレッドシートのターゲット座標を取得し、APIを用いて周辺の人気ホテルや設備情報に基づくFAQを自動で組み合わせるデータパイプラインを構築した。レンダリング負荷を考慮してSSG（ISR）方式を適用することで、パフォーマンスを落とさずに大量のSEOページの自動生成に成功し、オーガニック検索からの流入を大幅に強化した。',
              },
            ]}
          />

          <ul className="mt-4 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>
              {t(
                '기존 CSR 기반 페이지를 SSR/SSG(ISR)로 전환하여 초기 로딩 속도 및 SEO 성능 향상',
                '既存のCSR基盤ページをSSR/SSG（ISR）へ移行し、初期表示速度およびSEOパフォーマンスを向上'
              )}
            </li>
            <li>
              {t(
                'PdM의 타겟 호텔 선정 및 거리 파악을 돕기 위해, 기존 지도 페이지를 개조하여 대상 호텔만 시각화해주는 사내용 지도 툴을 자체 제작하여 업무 효율 향상에 기여',
                'PdMのターゲットホテル選定や距離把握を支援するため、既存の地図ページを改修し対象ホテルのみを視覚化する社内用地図ツールを独自に制作、業務効率向上に寄与'
              )}
            </li>
          </ul>

          <TechTags items={['Next.js', 'React', 'TypeScript', 'Styled Components', 'REST API', 'Redux', 'Express', 'Web Components', 'Lit', 'Storybook', 'Cypress']} />
        </div>

        {/* ========== Web Game ========== */}
        <div className="mb-12">
          <h3 className="text-base font-bold">
            {t(
              '🏢 웹 게임 개발（업무위탁・2020/12〜2021/04）',
              '🏢 Webゲーム開発（業務委託・2020/12〜2021/04）'
            )}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {t('웹 게임 업계', 'Webゲーム業界')}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            PM:1, Engineer:3
          </p>
          <ul className="mt-3 list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li>{t('레거시 코드 리팩토링 및 서비스 리뉴얼 대응', 'レガシーコード最新化と既存の不具合修正を担当し、システムのリニューアルに対応')}</li>
          </ul>
          <TechTags items={['JavaScript', 'Node.js', 'Pixi.js', 'Mocha']} />
        </div>

        {/* ========== Java 풀스택 프리랜서 ========== */}
        <div className="mb-12 rounded border border-border/50 p-5">
          <h3 className="text-base font-bold mb-4">
            {t('☕ Java 풀스택（업무위탁・2019/08〜2020/11）', '☕ Java フルスタック（業務委託・2019/08〜2020/11）')}
          </h3>

          <div className="mb-6">
            <h4 className="text-sm font-semibold">
              {t('도쿄증권거래소(東証) 주식 투자 정보 검색 서비스（2020/01〜2020/11）', '東京証券取引所（東証）株式投資情報検索サービス（2020/01〜2020/11）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('증권 업계', '証券業界')}</p>
            <p className="text-xs text-muted-foreground mt-0.5">PM:1, Engineer:2</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('메인 SE로 참가, 기술 스택 설계, 환경 구축 및 데모 버전 개발', 'メインSEとして参加、技術スタック設計、環境構築、デモバージョン開発')}</li>
              <li>{t('주식 종목 검색, 기간별 분석 결과 및 클라이언트 화면 기능 개발', '株式銘柄検索、期間別分析結果およびクライアント画面機能開発')}</li>
            </ul>
            <TechTags items={['Java', 'Spring Boot', 'PostgreSQL', 'MyBatis', 'JavaScript', 'jQuery', 'Thymeleaf']} />
          </div>

          <div>
            <h4 className="text-sm font-semibold">
              {t('KONAMI 물류・재고관리 시스템（2019/08〜2019/12）', 'KONAMI 物流・在庫管理システム（2019/08〜2019/12）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('물류 업계', '物流業界')}</p>
            <p className="text-xs text-muted-foreground mt-0.5">PM:1, Engineer:3</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('소비세 증세(8%→10%) 대응 기반 시스템 수정', '消費税増税（8%→10%）に対応して基盤システム修正')}</li>
              <li>{t('품목·종별 재고관리, 집계 시스템, CSV/Excel 출력 기능 개발', '品目・種別別在庫管理、集計システム、CSV/Excel出力機能開発')}</li>
            </ul>
            <TechTags items={['Java', 'JavaScript', 'PostgreSQL']} />
          </div>
        </div>

        {/* ========== GROP SC 정사원 ========== */}
        <div className="mb-10 rounded border border-border/50 p-5">
          <h3 className="text-base font-bold mb-1">
            {t(
              '🏢 株式会社GROP SC（정사원・2018/04〜2019/06）',
              '🏢 株式会社GROP SC（正社員・2018/04〜2019/06）'
            )}
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            {t('시스템 솔루션부', 'システムソリューション部')}
          </p>

          <div className="mb-6">
            <h4 className="text-sm font-semibold">
              {t('図研 전기 제어·하네스 설계 소프트웨어（2019/01〜2019/06）', '図研 電気制御・ハーネス設計ソフトウェア（2019/01〜2019/06）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('제조 업계', '製造業界')}</p>
            <p className="text-xs text-muted-foreground mt-0.5">PM:1, Engineer:8</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('Windows 네이티브 데스크탑 프로그램 개발', '電気・ハーネス設計用Windowsネイティブデスクトッププログラム開発')}</li>
              <li>{t('복수의 서버 시스템(Java, C#) 연동 및 다양한 버전의 네이티브 시스템 대응 개발', '複数のサーバーサイドシステムを連携して開発（Java, C#）、違うバージョンのネイティブシステムに対応')}</li>
              <li>{t('고객별 버전 커스터마이징 및 해외 문의 대응', '顧客別バージョンカスタマイズ保守、海外問い合わせ対応')}</li>
            </ul>
            <TechTags items={['Java', 'C#', 'Oracle', 'JavaScript']} />
          </div>

          <div className="mb-6">
            <h4 className="text-sm font-semibold">
              {t('부품 정보 검색 시스템（2018/09〜2018/12）', '部品情報検索システム（2018/09〜2018/12）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('제조 업계', '製造業界')}</p>
            <p className="text-xs text-muted-foreground mt-0.5">PM:1, Engineer:1</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('사내 부품 등록·검색 화면 개발 및 테스트 케이스 작성', '社内部品登録・検索画面開発、テストケース作成')}</li>
            </ul>
            <TechTags items={['Java', 'PostgreSQL', 'JavaScript', 'jQuery']} />
          </div>

          <div>
            <h4 className="text-sm font-semibold">
              {t('第一生命 보험 서비스 간 통합 인증 시스템 SSO（2018/04〜2018/08）', '第一生命 保険サービス間の統合認証システム SSO（2018/04〜2018/08）')}
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">{t('보험 업계', '保険業界')}</p>
            <p className="text-xs text-muted-foreground mt-0.5">PM:1, Engineer:3</p>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>{t('사내용 싱글 사인온 시스템 개발', '社内向けのシングルサインオンシステムの開発')}</li>
              <li>{t('기존 서비스와 신규 서비스 통합, 레거시 코드 최신화', '既存サービスと新規サービス統合、レガシーコード最新化')}</li>
            </ul>
            <TechTags items={['Java', 'JavaScript', 'DB2']} />
          </div>
        </div>
      </section>

      <hr className="border-border/50 mb-10" />

      {/* ===== 기술 스택 ===== */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-bold">
          {t('🛠 기술 스택', '🛠 技術スタック')}
        </h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted/30">
              <th className="border border-border/60 px-3 py-2 text-left font-medium w-[25%]">
                {t('분류', '種類')}
              </th>
              <th className="border border-border/60 px-3 py-2 text-left font-medium">
                {t('기술', '技術')}
              </th>
              <th className="border border-border/60 px-3 py-2 text-left font-medium whitespace-nowrap">
                {t('경험년수', '経験年数')}
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { category: t('언어', '言語'), name: 'JavaScript', years: t('8년', '8年'), rowSpan: 5 },
              { name: 'TypeScript', years: t('5년', '5年') },
              { name: 'Java', years: t('3년', '3年') },
              { name: 'HTML / CSS', years: t('8년', '8年') },
              { name: 'GraphQL', years: t('2년', '2年') },
              { category: <>{t('프레임워크・', 'フレームワーク・')}<br />{t('라이브러리', 'ライブラリ')}</>, name: 'React', years: t('5년', '5年'), rowSpan: 6 },
              { name: 'Next.js', years: t('5년', '5年') },
              { name: 'Redux', years: t('3년', '3年') },
              { name: 'Apollo Client', years: t('2년', '2年') },
              { name: 'Spring Boot', years: t('1년', '1年') },
              { name: 'Node.js, Vue.js, jQuery', years: '-' },
              { category: t('스타일링', 'スタイリング'), name: 'SCSS', years: t('4년', '4年'), rowSpan: 3 },
              { name: 'Styled Components', years: t('3년', '3年') },
              { name: 'Tailwind CSS', years: t('1년', '1年') },
              { category: t('테스팅', 'テスト'), name: 'Playwright', years: t('2년', '2年'), rowSpan: 3 },
              { name: 'Cypress', years: t('2년', '2年') },
              { name: 'Jest', years: t('2년', '2年') },
              { category: 'DB', name: 'PostgreSQL, MongoDB, Oracle, Supabase', years: '', rowSpan: 1 },
              { category: t('인프라・도구', 'インフラ・ツール'), name: 'Docker, GCP, Git, GitHub Actions, Bun, Figma, Storybook', years: '', rowSpan: 1 },
            ].map((row, i) => (
              <tr key={i}>
                {row.category !== undefined && (
                  <td 
                    className="border border-border/60 px-3 py-2 font-medium text-sm align-top" 
                    rowSpan={row.rowSpan}
                  >
                    {row.category}
                  </td>
                )}
                <td className="border border-border/60 px-3 py-2 text-muted-foreground">{row.name}</td>
                <td className="border border-border/60 px-3 py-2 text-muted-foreground whitespace-nowrap">{row.years}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <hr className="border-border/50 mb-10" />

      {/* ===== 챗봇 섹션 ===== */}
      <ChatbotSection language={language} />

      {/* ===== 개인 프로젝트 ===== */}
      <section className="mb-10">
        <h2 className="mb-6 text-lg font-bold">
          {t('🌟 개인 프로젝트', '🌟 個人プロジェクト')}
        </h2>

        <div className="space-y-6">
          {/* 블로그 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('개인 블로그 플랫폼', '個人ブログプラットフォーム')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">mintora.me</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'Next.js와 MDX를 활용한 정적 블로그. 다크모드, 다국어 지원(한국어/일본어), GitHub Pages 호스팅.',
                'Next.jsとMDXを活用した静的ブログ。ダークモード、多言語対応（日本語/韓国語）、GitHub Pagesホスティング。'
              )}
            </p>
            <TechTags items={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MDX']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/choco-mint" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/`} className="text-muted-foreground hover:text-foreground transition-colors">
                <IconExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* AI 페르소나 봇 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('AI 페르소나 봇 댓글 자동화 시스템', 'AIペルソナボットコメント自動化システム')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">Dead Internet Theory</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                '4개의 AI 페르소나가 블로그 포스트에 자동으로 댓글을 생성. GitHub Actions Cron으로 24시간 자동화, Gemini AI 활용.',
                '4つのAIペルソナがブログポストに自動的にコメントを生成。GitHub Actions Cronで24時間自動化、Gemini AI活用。'
              )}
            </p>
            <TechTags items={['Next.js', 'TypeScript', 'Google Gemini API', 'Supabase', 'GitHub Actions']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/dead-internet-theory" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/dead-internet-theory`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
            </div>
          </div>

          {/* RAG 챗봇 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('AI 기반 인터랙티브 포트폴리오 챗봇', 'AI基盤インタラクティブポートフォリオチャットボット')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">Its Me</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'RAG 기반 대화형 포트폴리오 챗봇. LangChain + Gemini + Supabase, Shadow DOM으로 외부 사이트 임베딩 가능.',
                'RAG基盤の対話型ポートフォリオチャットボット。LangChain + Gemini + Supabase、Shadow DOMで外部サイト埋め込み可能。'
              )}
            </p>
            <TechTags items={['Next.js', 'TypeScript', 'LangChain', 'Google Gemini API', 'Supabase', 'Vite']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/its-me" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/its-me`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
              <ChatbotButton language={language} />
            </div>
          </div>

          {/* 배당금 LINE봇 */}
          <div className="border-b border-border/30 pb-6">
            <h3 className="text-sm font-bold">
              {t('SBI 증권 배당금 자동 수집 LINE 알림 봇', 'SBI証券配当金自動取得LINE通知Bot')}
              <span className="ml-2 text-xs font-normal text-muted-foreground">cha-LINE</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'SBI 증권에서 배당금 정보를 Playwright로 자동 수집하여 LINE으로 통지. GCP VM + Express.js 운영.',
                'SBI証券から配当金情報をPlaywrightで自動収集しLINEで通知。GCP VM + Express.jsで運用。'
              )}
            </p>
            <TechTags items={['TypeScript', 'Playwright', 'Express', 'LINE Messaging API', 'Google Apps Script', 'GCP VM']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/cha-line" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/cha-line`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
            </div>
          </div>

          {/* CSS 린터 */}
          <div>
            <h3 className="text-sm font-bold">
              CSS Linter
              <span className="ml-2 text-xs font-normal text-muted-foreground">style-sentry</span>
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {t(
                'CSS 코딩 스탠다드 자동 검증 린터. 미사용 CSS 클래스 자동 검출, VSCode 확장 + npm CLI 도구로 제공.',
                'CSSコーディングスタンダード自動検証リンター。未使用CSSクラス自動検出、VSCode拡張＋npm CLIツールとして提供。'
              )}
            </p>
            <TechTags items={['Node.js', 'TypeScript', 'PostCSS', 'VSCode Extension API']} />
            <div className="mt-2 flex gap-3">
              <a href="https://github.com/ho1112/style-sentry" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconGithub className="h-5 w-5" />
              </a>
              <a href="https://www.npmjs.com/package/style-sentry" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconNpm className="h-8 w-8" />
              </a>
              <a href="https://marketplace.visualstudio.com/items?itemName=leehoyeon.style-sentry-vscode" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <IconVSCode className="h-5 w-5" />
              </a>
              <a href={`/blog/${language}/codeLab/style-sentry`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-xs">
                <IconBlog className="h-5 w-5" /> post
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
