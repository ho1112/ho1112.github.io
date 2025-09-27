'use client'

import { useState } from 'react'

interface JavaProjectsAccordionProps {
  language: 'ko' | 'ja'
  TECH_STACK: Record<string, string>
}

export default function JavaProjectsAccordion({
  language,
  TECH_STACK,
}: JavaProjectsAccordionProps) {
  const [showJavaProjects, setShowJavaProjects] = useState(false)

  return (
    <div className="border rounded-lg">
      <button
        onClick={() => setShowJavaProjects(!showJavaProjects)}
        className="w-full text-left p-4 flex justify-between items-center hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center">
          <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
          <span className="font-semibold text-lg">
            {language === 'ko'
              ? 'Java Full-Stack Projects'
              : 'Java Full-Stack Projects'}
          </span>
        </div>
        <span className="text-muted-foreground">
          {showJavaProjects ? '▼' : '▶'}
        </span>
      </button>

      {showJavaProjects && (
        <div className="px-4 pb-4 space-y-4">
          {/* 東証 */}
          <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-yellow-500">
            <h3 className="font-semibold text-lg mb-2">
              {language === 'ko'
                ? '주식 투자 정보 검색 서비스'
                : '株式投資情報検索サービス'}
            </h3>
            <p className="text-chomin font-medium mb-3">2020.01 - 2020.11</p>
            <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
              {(language === 'ko'
                ? [
                    '메인 SE로 참가하여 기술 스택 설계, 환경 구축 및 데모버전 개발',
                    '주식 종목 검색 기능 개발',
                    '기간별 주식 분석 결과 기능 개발',
                    '클라이언트 화면 개발',
                  ]
                : [
                    'メインSEとして参加し、技術スタック設計、環境構築、デモバージョン開発',
                    '株式銘柄検索機能開発',
                    '期間別株式分析結果機能開発',
                    'クライアント画面開発',
                  ]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                TECH_STACK.JAVA,
                TECH_STACK.SPRING_BOOT,
                TECH_STACK.POSTGRESQL,
                TECH_STACK.MYBATIS,
                TECH_STACK.JAVASCRIPT,
                TECH_STACK.JQUERY,
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* konami */}
          <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-pink-500">
            <h3 className="font-semibold text-lg mb-2">
              {language === 'ko'
                ? '물류・재고관리 시스템'
                : '物流・在庫管理システム'}
            </h3>
            <p className="text-chomin font-medium mb-3">2019.08 - 2019.12</p>
            <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
              {(language === 'ko'
                ? [
                    '소비세 8%->10% 증세에 따라 기반 시스템 수정',
                    '품목, 종류별 재고 관리, 집계 시스템 개발',
                    'CSV, Excel 출력 기능 개발',
                    '전용 단말기 화면 개발',
                  ]
                : [
                    '消費税10%増税に対応して基盤システム修正',
                    '品目, 種別別在庫管理, 集計システム開発',
                    'CSV, Excel出力機能開発',
                    '専用端末画面開発',
                  ]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                TECH_STACK.JAVA,
                TECH_STACK.JAVASCRIPT,
                TECH_STACK.POSTGRESQL,
                'JPA',
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* zuken */}
          <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-indigo-500">
            <h3 className="font-semibold text-lg mb-2">
              {language === 'ko'
                ? '전기 제어・하네스 설계 소프트웨어'
                : '電気制御・ハーネス設計ソフトウェア'}
            </h3>
            <p className="text-chomin font-medium mb-3">2019.01 - 2019.06</p>
            <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
              {(language === 'ko'
                ? [
                    'Windows 네이티브 데스크탑 프로그램 개발',
                    '고객별 버전 차이에 따른 커스터마이징 유지보수 및 버그 수정',
                    '외국 문의 대응',
                  ]
                : [
                    '電気・ハーネス設計用Windowsネイティブデスクトッププログラム開発',
                    '顧客別バージョン差異に応じたカスタマイズ保守とバグ修正',
                    '海外問い合わせ対応',
                  ]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                TECH_STACK.JAVA,
                TECH_STACK.C_SHARP,
                TECH_STACK.ORACLE,
                TECH_STACK.JAVASCRIPT,
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 부품 검색 시스템 */}
          <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-cyan-500">
            <h3 className="font-semibold text-lg mb-2">
              {language === 'ko'
                ? '부품 정보 검색 시스템'
                : '部品情報検索システム'}
            </h3>
            <p className="text-chomin font-medium mb-3">2018.09 - 2018.12</p>
            <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
              {(language === 'ko'
                ? ['사내 부품 등록, 검색 화면 개발', '테스트 케이스 작성']
                : ['社内部品登録, 検索画面開発', 'テストケース作成']
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                TECH_STACK.JAVA,
                TECH_STACK.POSTGRESQL,
                TECH_STACK.JAVASCRIPT,
                TECH_STACK.JQUERY,
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 第一生命 */}
          <div className="bg-muted/30 rounded-lg p-5 border-l-4 border-emerald-500">
            <h3 className="font-semibold text-lg mb-2">
              {language === 'ko'
                ? '보험 서비스 간 통합 인증 시스템(SSO)'
                : '保険サービス間の統合認証システム(SSO)'}
            </h3>
            <p className="text-chomin font-medium mb-3">2018.04 - 2018.08</p>
            <ul className="text-muted-foreground mb-4 list-disc list-inside space-y-1">
              {(language === 'ko'
                ? ['기존 서비스와 신규 서비스 통합, 레거시 코드 최신화']
                : ['既存サービスと新規サービス統合, レガシーコード最新化']
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {[TECH_STACK.JAVA, TECH_STACK.JAVASCRIPT, 'DB2'].map((tech) => (
                <span
                  key={tech}
                  className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
